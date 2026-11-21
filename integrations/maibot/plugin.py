"""Query the portal and forward check-in results and login expirations to QQ."""

import asyncio
import json
import re
import time
from contextlib import suppress
from typing import Any

import httpx
from maibot_sdk import Command, MaiBotPlugin

from .config import WeiboConfig

STATUS_PATH = "/api/integrations/maibot/v1/status"
COMMAND_RE = re.compile(r"^/微博签到(?:\s+(?P<subcommand>.+?))?\s*$")
CHECKIN = {
    "success": "已签到",
    "not_run": "未签到",
    "queued": "排队中",
    "running": "正在签到",
    "partial": "部分失败",
    "failed": "签到失败",
    "expired": "签到未完成",
    "network_error": "网络异常",
    "interrupted": "任务中断",
    "no_topics": "没有可签到超话",
}
TOPIC_STATUS = {
    "done_before": "此前已签",
    "success": "新签成功",
    "failed": "失败",
    "network_error": "网络异常",
    "unknown": "未识别",
    "pending": "待签",
}
ABNORMAL_TODAY_STATUSES = {
    "partial",
    "failed",
    "expired",
    "network_error",
    "interrupted",
    "no_topics",
}
ABNORMAL_TOPIC_STATUSES = {"failed", "network_error", "unknown", "pending"}
RUN_STATUS_GROUPS = {
    "all": {
        "success",
        "no_topics",
        "partial",
        "failed",
        "network_error",
        "interrupted",
    },
    "failures_only": {"partial", "failed", "network_error", "interrupted"},
    "off": set(),
}


def account_label(account: dict[str, Any]) -> str:
    return (
        " ".join(str(account["nickname"]).split())
        or f"微博（尾号 {account['uid'][-4:]}）"
    )


def chunk_lines(header: str, lines: list[str], limit: int = 1500) -> list[str]:
    chunks = [header]
    for line in lines:
        if len(chunks[-1]) + 1 + len(line) > limit and chunks[-1] != header:
            chunks.append(header)
        chunks[-1] += "\n" + line
    return chunks


def run_counts_text(run: dict[str, Any]) -> str:
    total = int(run.get("total", 0) or 0)
    if total <= 0:
        return ""
    parts = [
        f"新签 {int(run.get('success', 0) or 0)}",
        f"此前已签 {int(run.get('done_before', 0) or 0)}",
        f"失败 {int(run.get('failed', 0) or 0)}",
    ]
    unknown = int(run.get("unknown", 0) or 0)
    if unknown:
        parts.append(f"未识别 {unknown}")
    return f"共 {total} 个超话：{'，'.join(parts)}"


def summary(snapshot: dict[str, Any]) -> list[str]:
    lines = []
    for account in snapshot["accounts"]:
        note = CHECKIN.get(account["today_status"], "签到状态未知")
        if account["login_status"] == "expired":
            note += " · 登录失效"
        elif account["login_status"] == "error":
            note += " · 登录检测异常"
        latest_run = account.get("latest_run")
        if latest_run and int(latest_run.get("total", 0) or 0) > 0:
            done = int(latest_run.get("done_before", 0) or 0) + int(
                latest_run.get("success", 0) or 0
            )
            note += f"（{done}/{latest_run['total']}）"
        if not account["automatic"]:
            note += " · 未启用自动签到"
        lines.append(f"{account_label(account)}：{note}")
    header = f"微博超话签到 · {snapshot['day']}（北京时间）"
    return chunk_lines(header, lines or ["没有已授权且已绑定的微博账号。"])


def abnormal_summary(snapshot: dict[str, Any]) -> list[str]:
    header = f"微博超话异常 · {snapshot['day']}（北京时间）"
    accounts = snapshot["accounts"]
    if not accounts:
        return [f"{header}\n没有已授权且已绑定的微博账号。"]
    lines = []
    for account in accounts:
        is_abnormal = (
            account.get("login_status") != "valid"
            or account.get("expiration") is not None
            or account.get("today_status") in ABNORMAL_TODAY_STATUSES
        )
        if not is_abnormal:
            continue
        note = CHECKIN.get(account["today_status"], "签到状态未知")
        if account["login_status"] == "expired":
            note += " · 登录失效"
        elif account["login_status"] == "error":
            note += " · 登录检测异常"
        latest_run = account.get("latest_run")
        if latest_run:
            if int(latest_run.get("total", 0) or 0) > 0:
                done = int(latest_run.get("done_before", 0) or 0) + int(
                    latest_run.get("success", 0) or 0
                )
                note += f"（{done}/{latest_run['total']}）"
            abnormal_topics = [
                topic["name"]
                for topic in (latest_run.get("topics") or [])
                if topic.get("status") in ABNORMAL_TOPIC_STATUSES and topic.get("name")
            ]
            if abnormal_topics:
                shown = "、".join(abnormal_topics[:5])
                suffix = (
                    f" 等 {len(abnormal_topics)} 个" if len(abnormal_topics) > 5 else ""
                )
                note += f"｜异常超话：{shown}{suffix}"
            elif latest_run.get("message"):
                note += f"｜{latest_run['message']}"
        lines.append(f"{account_label(account)}：{note}")
    return chunk_lines(header, lines or ["当前所有授权账号状态正常。"])


def details_summary(snapshot: dict[str, Any], query: str = "") -> list[str]:
    header = f"微博超话详情 · {snapshot['day']}（北京时间）"
    accounts = snapshot["accounts"]
    if not accounts:
        return [f"{header}\n没有已授权且已绑定的微博账号。"]
    needle = query.strip().lower()
    if needle:
        accounts = [
            account
            for account in accounts
            if needle == str(account["uid"]).lower()
            or needle in account_label(account).lower()
            or needle in str(account.get("nickname", "")).lower()
        ]
        if not accounts:
            return [f"未找到匹配“{query.strip()}”的授权微博账号。"]
    lines: list[str] = []
    for index, account in enumerate(accounts):
        if index:
            lines.append("")
        lines.append(f"【{account_label(account)}】UID {account['uid']}")
        login_text = {"valid": "正常", "expired": "已失效", "error": "检测异常"}.get(
            account.get("login_status", ""), "未知"
        )
        if account.get("automatic"):
            scheduled = account.get("scheduled_time")
            auto_text = f"已启用（{scheduled}）" if scheduled else "已启用"
        else:
            auto_text = "未启用"
        today_text = CHECKIN.get(account["today_status"], "签到状态未知")
        lines.append(
            f"今日状态：{today_text}｜登录：{login_text}｜自动签到：{auto_text}"
        )
        latest_run = account.get("latest_run")
        if not latest_run:
            lines.append("今日暂无执行记录。")
            continue
        trigger_text = (
            "自动签到" if latest_run.get("trigger") == "scheduled" else "手动签到"
        )
        run_status_text = CHECKIN.get(latest_run.get("status", ""), "状态未知")
        lines.append(f"最近执行：{trigger_text} · {run_status_text}")
        if counts_text := run_counts_text(latest_run):
            lines.append(counts_text)
        if latest_run.get("message"):
            lines.append(f"说明：{latest_run['message']}")
        topics = latest_run.get("topics") or []
        if topics:
            lines.append("超话明细：")
            for topic in topics:
                topic_state = TOPIC_STATUS.get(
                    topic.get("status", ""), str(topic.get("status", "未知"))
                )
                lines.append(f"- {topic.get('name', '未命名超话')}：{topic_state}")
    return chunk_lines(header, lines)


def format_run_notification(account: dict[str, Any], run: dict[str, Any]) -> str:
    trigger_text = "自动签到" if run.get("trigger") == "scheduled" else "手动签到"
    status_text = CHECKIN.get(run.get("status", ""), "状态未知")
    lines = [f"微博签到通知：{account_label(account)} {trigger_text} · {status_text}"]
    if counts_text := run_counts_text(run):
        lines.append(counts_text)
    if run.get("status") != "success" and run.get("message"):
        lines.append(f"说明：{run['message']}")
    abnormal_topics = [
        topic["name"]
        for topic in (run.get("topics") or [])
        if topic.get("status") in ABNORMAL_TOPIC_STATUSES and topic.get("name")
    ]
    if abnormal_topics:
        shown = "、".join(abnormal_topics[:10])
        suffix = f" 等共 {len(abnormal_topics)} 个" if len(abnormal_topics) > 10 else ""
        lines.append(f"异常超话：{shown}{suffix}")
    return "\n".join(lines)


def help_text() -> str:
    return (
        "微博超话签到指令帮助：\n"
        "/微博签到 —— 查看所有授权账号今日签到概览\n"
        "/微博签到 异常 —— 仅查看今日异常或登录失效账号\n"
        "/微博签到 详情 [昵称或UID] —— 查看今日签到统计与超话明细\n"
        "/微博签到 测试通知 —— 向已配置的通知 QQ/群发送测试消息\n"
        "/微博签到 help —— 查看本帮助（也可用 帮助）"
    )


class WeiboCheckinPlugin(MaiBotPlugin):
    config_model = WeiboConfig

    def __init__(self):
        super().__init__()
        self._task: asyncio.Task | None = None
        self._wake = asyncio.Event()
        self._sent_expirations: dict[str, list[str]] = {}
        self._sent_runs: dict[str, list[str]] = {}
        self._run_days: dict[str, str] = {}
        self._runs_since: float = 0.0
        self._dirty = False
        self._warnings: set[str] = set()

    def _warn_once(self, message: str):
        if message not in self._warnings:
            self.ctx.logger.warning(message)
            self._warnings.add(message)

    @property
    def _delivery_file(self):
        return self.ctx.paths.data_dir / "delivered.json"

    async def on_load(self):
        def load():
            try:
                return json.loads(self._delivery_file.read_text(encoding="utf-8"))
            except FileNotFoundError:
                return {}

        raw = await asyncio.to_thread(load)
        if not isinstance(raw, dict):
            raw = {}
        if isinstance(raw.get("expirations"), dict):
            self._sent_expirations = {
                str(key): [str(item) for item in values]
                for key, values in raw.get("expirations", {}).items()
                if isinstance(values, list)
            }
            self._sent_runs = {
                str(key): [str(item) for item in values]
                for key, values in raw.get("runs", {}).items()
                if isinstance(values, list)
            }
            self._run_days = {
                str(key): str(value) for key, value in raw.get("run_days", {}).items()
            }
        else:
            self._sent_expirations = {
                str(key): [str(item) for item in values]
                for key, values in raw.items()
                if isinstance(values, list)
            }
            self._sent_runs = {}
            self._run_days = {}

        if "runs_since" in raw and isinstance(raw["runs_since"], (int, float)):
            self._runs_since = float(raw["runs_since"])
        else:
            self._runs_since = time.time() - 10
            self._dirty = True
            await self._save_deliveries()

        self._task = asyncio.create_task(self._poll())

    async def on_unload(self):
        if self._task:
            self._task.cancel()
            with suppress(asyncio.CancelledError):
                await self._task

    async def on_config_update(
        self, scope: str, config_data: dict[str, Any], version: str
    ):
        # The installed SDK applies the validated self config before dispatching this hook.
        if scope == "self":
            self._warnings.clear()
            self._wake.set()

    async def _save_deliveries(self):
        data: dict[str, Any] = {
            "expirations": self._sent_expirations,
            "runs": self._sent_runs,
            "run_days": self._run_days,
        }
        if self._runs_since:
            data["runs_since"] = self._runs_since
        payload = json.dumps(data, ensure_ascii=False)

        def write():
            path = self._delivery_file
            path.parent.mkdir(parents=True, exist_ok=True)
            temp = path.with_suffix(".tmp")
            temp.write_text(payload, encoding="utf-8")
            temp.replace(path)

        await asyncio.to_thread(write)
        self._dirty = False

    async def _snapshot(self, config: WeiboConfig) -> dict[str, Any]:
        async with httpx.AsyncClient(
            timeout=8, follow_redirects=False, trust_env=False
        ) as client:
            response = await client.get(
                config.portal.base_url + STATUS_PATH,
                headers={"Authorization": f"Bearer {config.portal.read_token}"},
            )
            response.raise_for_status()
            return response.json()

    @staticmethod
    def _destinations(config: WeiboConfig) -> list[tuple[str, str]]:
        destinations = [("qq", value) for value in config.chats.notify_qq]
        destinations += [("group", value) for value in config.chats.notify_groups]
        return destinations

    async def _open_destination(
        self, config: WeiboConfig, kind: str, target: str
    ) -> str | None:
        session = await self.ctx.chat.open_session(
            platform="qq",
            account_id=config.chats.bot_qq,
            **(
                {"chat_type": "private", "user_id": target}
                if kind == "qq"
                else {"chat_type": "group", "group_id": target}
            ),
        )
        stream = session.get("stream") if session.get("success") is True else None
        if not stream or not stream.get("stream_id"):
            return None
        return str(stream["stream_id"])

    async def _send_test_notifications(self, config: WeiboConfig) -> str:
        destinations = self._destinations(config)
        if not destinations:
            return "尚未配置通知接收人（notify_qq 或 notify_groups），请先在麦麦插件管理页填写。"
        results = []
        text = f"微博签到通知测试：配置正常（当前签到通知模式：{config.chats.notify_checkin}）。"
        for kind, target in destinations:
            key = f"{kind}:{target}"
            try:
                target_stream = await self._open_destination(config, kind, target)
                if not target_stream:
                    results.append(f"{key}：无法打开 QQ 会话")
                    continue
                sent = await self.ctx.send.text(
                    text, target_stream, storage_message=False
                )
                results.append(f"{key}：发送成功" if sent else f"{key}：发送失败")
            except Exception as exc:
                results.append(f"{key}：投递异常（{type(exc).__name__}）")
        return "微博签到测试通知结果：\n" + "\n".join(results)

    @Command(
        "weibo_checkin",
        description="查询微博超话签到或测试通知（支持 help、异常、详情、测试通知）",
        pattern=r"^/微博签到(?:\s+(?P<subcommand>.+?))?\s*$",
    )
    async def checkin_status(
        self,
        stream_id: str,
        platform: str,
        user_id: str,
        group_id: str = "",
        matched_groups: dict[str, Any] | None = None,
        **kwargs,
    ):
        config = self.config
        if (
            platform != "qq"
            or not stream_id
            or not config.plugin.enabled
            or user_id not in config.chats.query_qq
            or (group_id and group_id not in config.chats.query_groups)
        ):
            return True, None, True

        raw = ""
        if (
            isinstance(matched_groups, dict)
            and matched_groups.get("subcommand") is not None
        ):
            raw = str(matched_groups["subcommand"]).strip()
        elif text := str(kwargs.get("text", "") or "").strip():
            if matched := COMMAND_RE.match(text):
                raw = (matched.group("subcommand") or "").strip()

        parts = raw.split(None, 1)
        action = parts[0].lower() if parts else ""
        arg = parts[1].strip() if len(parts) > 1 else ""

        if action in {"help", "帮助", "?"}:
            await self.ctx.send.text(help_text(), stream_id, storage_message=False)
            return True, None, True

        if action == "测试通知":
            report = await self._send_test_notifications(config)
            if config is self.config:
                await self.ctx.send.text(report, stream_id, storage_message=False)
            return True, None, True

        if action not in {"", "异常", "详情"}:
            await self.ctx.send.text(
                f"未知子命令“{raw}”。发送 /微博签到 help 查看可用指令。",
                stream_id,
                storage_message=False,
            )
            return True, None, True

        if not config.portal.read_token:
            await self.ctx.send.text(
                "微博签到查询尚未配置，请联系管理员。", stream_id, storage_message=False
            )
            return True, None, True

        try:
            snapshot = await self._snapshot(config)
            if action == "异常":
                messages = abnormal_summary(snapshot)
            elif action == "详情":
                messages = details_summary(snapshot, arg)
            else:
                messages = summary(snapshot)
        except (httpx.HTTPError, ValueError, KeyError, TypeError):
            messages = ["暂时无法查询微博签到，请稍后再试或联系管理员。"]
        if config is self.config:
            for message in messages:
                if config is not self.config:
                    break
                await self.ctx.send.text(message, stream_id, storage_message=False)
        return True, None, True

    async def _notify(self, config: WeiboConfig):
        if not config.plugin.enabled or not config.portal.read_token:
            return
        destinations = self._destinations(config)
        if not destinations:
            return
        snapshot = await self._snapshot(config)
        if config is not self.config:
            return

        day = str(snapshot.get("day", ""))
        active = {
            a["expiration"]["id"]: a
            for a in snapshot["accounts"]
            if a.get("expiration")
        }
        current_expirations = {
            key: values
            for key, values in self._sent_expirations.items()
            if key in active
        }
        if current_expirations != self._sent_expirations:
            self._sent_expirations = current_expirations
            self._dirty = True

        if day:
            current_runs = {
                run_id: values
                for run_id, values in self._sent_runs.items()
                if self._run_days.get(run_id) == day
            }
            current_run_days = {
                run_id: run_day
                for run_id, run_day in self._run_days.items()
                if run_id in current_runs
            }
            if current_runs != self._sent_runs or current_run_days != self._run_days:
                self._sent_runs = current_runs
                self._run_days = current_run_days
                self._dirty = True

        if self._dirty:
            await self._save_deliveries()

        eligible_statuses = RUN_STATUS_GROUPS.get(config.chats.notify_checkin, set())
        eligible_runs: dict[str, tuple[dict[str, Any], dict[str, Any]]] = {}
        if eligible_statuses:
            for account in snapshot["accounts"]:
                run = account.get("latest_run")
                if not isinstance(run, dict):
                    continue
                run_id = run.get("id")
                finished_at = run.get("finished_at")
                if not run_id or finished_at is None:
                    continue
                if run.get("status") not in eligible_statuses:
                    continue
                if self._runs_since and float(finished_at) < self._runs_since:
                    continue
                eligible_runs[str(run_id)] = (account, run)

        for kind, target in destinations:
            key = f"{kind}:{target}"
            pending_expirations = [
                (incident, account)
                for incident, account in active.items()
                if key not in self._sent_expirations.get(incident, [])
            ]
            pending_runs = [
                (run_id, account, run)
                for run_id, (account, run) in eligible_runs.items()
                if key not in self._sent_runs.get(run_id, [])
            ]
            if not pending_expirations and not pending_runs:
                continue
            try:
                if config is not self.config:
                    return
                target_stream = await self._open_destination(config, kind, target)
                if not target_stream:
                    self._warn_once(
                        f"微博签到提醒：无法打开 {key} 的 QQ 会话，将重试。"
                    )
                    continue
                failed = False
                for incident, account in pending_expirations:
                    if config is not self.config:
                        return
                    sent = await self.ctx.send.text(
                        f"微博签到提醒：{account_label(account)} 的登录已失效。"
                        f"请到 {config.portal.base_url} 重新扫码。",
                        target_stream,
                        storage_message=False,
                    )
                    if not sent:
                        self._warn_once(f"微博签到提醒：发送到 {key} 失败，将重试。")
                        failed = True
                        break
                    self._sent_expirations.setdefault(incident, []).append(key)
                    self._dirty = True
                    await self._save_deliveries()
                if failed:
                    continue
                for run_id, account, run in pending_runs:
                    if config is not self.config:
                        return
                    sent = await self.ctx.send.text(
                        format_run_notification(account, run),
                        target_stream,
                        storage_message=False,
                    )
                    if not sent:
                        self._warn_once(f"微博签到提醒：发送到 {key} 失败，将重试。")
                        break
                    self._sent_runs.setdefault(run_id, []).append(key)
                    if day:
                        self._run_days[run_id] = day
                    self._dirty = True
                    await self._save_deliveries()
            except Exception as exc:
                self._warn_once(
                    f"微博签到提醒：{key} 投递异常（{type(exc).__name__}），将重试。"
                )

    async def _poll(self):
        while True:
            self._wake.clear()
            try:
                await self._notify(self.config)
            except httpx.HTTPStatusError as exc:
                self._warn_once(
                    f"微博签到提醒：面板接口返回 HTTP {exc.response.status_code}。"
                )
            except Exception as exc:
                self._warn_once(f"微博签到提醒：轮询失败（{type(exc).__name__}）。")
            with suppress(TimeoutError):
                await asyncio.wait_for(self._wake.wait(), timeout=60)


def create_plugin() -> WeiboCheckinPlugin:
    return WeiboCheckinPlugin()
