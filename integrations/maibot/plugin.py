"""Query the portal and forward confirmed login-expiration incidents to QQ."""

from contextlib import suppress
from typing import Any

import asyncio
import json

import httpx
from maibot_sdk import Command, MaiBotPlugin

from .config import WeiboConfig

STATUS_PATH = "/api/integrations/maibot/v1/status"
CHECKIN = {
    "success": "已签到", "not_run": "未签到", "queued": "排队中", "running": "正在签到",
    "partial": "部分失败", "failed": "签到失败", "expired": "签到未完成",
    "network_error": "网络异常", "interrupted": "任务中断", "no_topics": "没有可签到超话",
}


def account_label(account: dict[str, Any]) -> str:
    return " ".join(account["nickname"].split()) or f"微博（尾号 {account['uid'][-4:]}）"


def summary(snapshot: dict[str, Any]) -> list[str]:
    lines = []
    for account in snapshot["accounts"]:
        note = CHECKIN.get(account["today_status"], "签到状态未知")
        if account["login_status"] == "expired":
            note += " · 登录失效"
        elif account["login_status"] == "error":
            note += " · 登录检测异常"
        if not account["automatic"]:
            note += " · 未启用自动签到"
        lines.append(f"{account_label(account)}：{note}")
    header = f"微博超话签到 · {snapshot['day']}（北京时间）"
    chunks = [header]
    for line in lines or ["没有已授权且已绑定的微博账号。"]:
        if len(chunks[-1]) + len(line) > 1500:
            chunks.append(header)
        chunks[-1] += "\n" + line
    return chunks


class WeiboCheckinPlugin(MaiBotPlugin):
    config_model = WeiboConfig

    def __init__(self):
        super().__init__()
        self._task: asyncio.Task | None = None
        self._wake = asyncio.Event()
        self._sent: dict[str, list[str]] = {}
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

        self._sent = await asyncio.to_thread(load)
        self._task = asyncio.create_task(self._poll())

    async def on_unload(self):
        if self._task:
            self._task.cancel()
            with suppress(asyncio.CancelledError):
                await self._task

    async def on_config_update(self, scope: str, config_data: dict[str, Any], version: str):
        # The installed SDK applies the validated self config before dispatching this hook.
        if scope == "self":
            self._warnings.clear()
            self._wake.set()

    async def _save_deliveries(self):
        payload = json.dumps(self._sent, ensure_ascii=False)

        def write():
            path = self._delivery_file
            temp = path.with_suffix(".tmp")
            temp.write_text(payload, encoding="utf-8")
            temp.replace(path)

        await asyncio.to_thread(write)
        self._dirty = False

    async def _snapshot(self, config: WeiboConfig) -> dict[str, Any]:
        async with httpx.AsyncClient(timeout=8, follow_redirects=False, trust_env=False) as client:
            response = await client.get(
                config.portal.base_url + STATUS_PATH,
                headers={"Authorization": f"Bearer {config.portal.read_token}"},
            )
            response.raise_for_status()
            return response.json()

    @Command("weibo_checkin", description="查询今天的微博超话签到", pattern=r"^/微博签到\s*$")
    async def checkin_status(self, stream_id: str, platform: str, user_id: str, group_id: str = "", **kwargs):
        config = self.config
        if (
            platform != "qq" or not stream_id or not config.plugin.enabled
            or user_id not in config.chats.query_qq
            or (group_id and group_id not in config.chats.query_groups)
        ):
            return True, None, True
        if not config.portal.read_token:
            await self.ctx.send.text("微博签到查询尚未配置，请联系管理员。", stream_id, storage_message=False)
            return True, None, True
        try:
            messages = summary(await self._snapshot(config))
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
        destinations = [("qq", value) for value in config.chats.notify_qq]
        destinations += [("group", value) for value in config.chats.notify_groups]
        if not destinations:
            return
        snapshot = await self._snapshot(config)
        if config is not self.config:
            return
        active = {a["expiration"]["id"]: a for a in snapshot["accounts"] if a["expiration"]}
        current = {key: values for key, values in self._sent.items() if key in active}
        if current != self._sent:
            self._sent = current
            self._dirty = True
        if self._dirty:
            await self._save_deliveries()
        for kind, target in destinations:
            key = f"{kind}:{target}"
            pending = [(incident, account) for incident, account in active.items() if key not in self._sent.get(incident, [])]
            if not pending:
                continue
            try:
                if config is not self.config:
                    return
                session = await self.ctx.chat.open_session(
                    platform="qq", account_id=config.chats.bot_qq,
                    **({"chat_type": "private", "user_id": target} if kind == "qq"
                       else {"chat_type": "group", "group_id": target}),
                )
                stream = session.get("stream") if session.get("success") is True else None
                if not stream or not stream.get("stream_id"):
                    self._warn_once(f"微博签到提醒：无法打开 {key} 的 QQ 会话，将重试。")
                    continue
                for incident, account in pending:
                    if config is not self.config:
                        return
                    sent = await self.ctx.send.text(
                        f"微博签到提醒：{account_label(account)} 的登录已失效。"
                        f"请到 {config.portal.base_url} 重新扫码。",
                        stream["stream_id"], storage_message=False,
                    )
                    if not sent:
                        self._warn_once(f"微博签到提醒：发送到 {key} 失败，将重试。")
                        break
                    self._sent.setdefault(incident, []).append(key)
                    self._dirty = True
                    await self._save_deliveries()
            except Exception as exc:
                self._warn_once(f"微博签到提醒：{key} 投递异常（{type(exc).__name__}），将重试。")

    async def _poll(self):
        while True:
            self._wake.clear()
            try:
                await self._notify(self.config)
            except httpx.HTTPStatusError as exc:
                self._warn_once(f"微博签到提醒：面板接口返回 HTTP {exc.response.status_code}。")
            except Exception as exc:
                self._warn_once(f"微博签到提醒：轮询失败（{type(exc).__name__}）。")
            with suppress(TimeoutError):
                await asyncio.wait_for(self._wake.wait(), timeout=60)


def create_plugin() -> WeiboCheckinPlugin:
    return WeiboCheckinPlugin()
