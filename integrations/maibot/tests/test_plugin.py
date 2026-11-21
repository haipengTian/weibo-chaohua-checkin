"""Exercise the installed SDK's chat and send proxies without sending QQ messages."""

import asyncio
import json
import time
from copy import deepcopy
from unittest.mock import AsyncMock

from maibot_sdk import PluginContext, PluginPaths

from integrations.maibot.plugin import create_plugin

PLUGIN_ID = "haipengtian.weibo-checkin"
TOKEN = "read-only-test-token-0123456789-secret"
CONFIG = {
    "plugin": {"config_version": "1.0.0"},
    "portal": {"read_token": TOKEN},
    "chats": {"query_qq": ["101"]},
}
SNAPSHOT = {
    "day": "2026-11-18",
    "accounts": [
        {
            "uid": "7777",
            "nickname": "测试微博",
            "login_status": "expired",
            "today_status": "partial",
            "automatic": True,
            "scheduled_time": "09:00",
            "expiration": {"id": "incident-1", "detected_at": 123},
            "latest_run": {
                "id": "run-1",
                "trigger": "scheduled",
                "status": "partial",
                "started_at": 100.0,
                "finished_at": 120.0,
                "total": 3,
                "done_before": 1,
                "success": 1,
                "failed": 1,
                "unknown": 0,
                "message": "部分超话签到失败",
                "topics": [
                    {"name": "周杰伦", "status": "done_before"},
                    {"name": "林俊杰", "status": "success"},
                    {"name": "五月天", "status": "failed"},
                ],
            },
        }
    ],
}


def setup_plugin(tmp_path, config, rpc, snapshot=None):
    plugin = create_plugin()
    plugin._set_context(
        PluginContext(PLUGIN_ID, rpc_call=rpc, paths=PluginPaths(tmp_path, tmp_path))
    )
    plugin.set_plugin_config(config)
    plugin._snapshot = AsyncMock(
        return_value=deepcopy(SNAPSHOT if snapshot is None else snapshot)
    )
    return plugin


def test_command_permissions_fail_closed(tmp_path):
    async def run():
        rpc = AsyncMock(return_value={"success": True})
        plugin = setup_plugin(tmp_path, CONFIG, rpc)
        await plugin.checkin_status("private", "qq", "999")
        await plugin.checkin_status(
            "private", "qq", "999", matched_groups={"subcommand": "help"}
        )
        await plugin.checkin_status("group", "qq", "101", "777")
        await plugin.checkin_status("web", "web", "101")
        rpc.assert_not_called()
        plugin._snapshot.assert_not_called()

        await plugin.checkin_status("private", "qq", "101")
        rpc.assert_awaited_once()
        sent = rpc.call_args.args[2]["args"]
        assert sent["stream_id"] == "private" and sent["storage_message"] is False
        assert "部分失败 · 登录失效（2/3）" in sent["text"]

        plugin.set_plugin_config(
            {**CONFIG, "chats": {"query_qq": ["101"], "query_groups": ["777"]}}
        )
        rpc.reset_mock()
        await plugin.checkin_status("group", "qq", "999", "777")
        rpc.assert_not_called()
        await plugin.checkin_status("group", "qq", "101", "777")
        assert rpc.call_args.args[2]["args"]["stream_id"] == "group"

    asyncio.run(run())


def test_subcommands_help_abnormal_details_and_test_notify(tmp_path):
    async def run():
        snapshot = {
            "day": "2026-11-18",
            "accounts": [
                {
                    "uid": "1001",
                    "nickname": "正常账号",
                    "login_status": "valid",
                    "today_status": "success",
                    "automatic": True,
                    "scheduled_time": "08:30",
                    "expiration": None,
                    "latest_run": {
                        "id": "run-ok",
                        "trigger": "scheduled",
                        "status": "success",
                        "started_at": 100.0,
                        "finished_at": 110.0,
                        "total": 2,
                        "done_before": 0,
                        "success": 2,
                        "failed": 0,
                        "unknown": 0,
                        "message": "签到完成",
                        "topics": [
                            {"name": "正常超话A", "status": "success"},
                            {"name": "正常超话B", "status": "done_before"},
                        ],
                    },
                },
                {
                    "uid": "1002",
                    "nickname": "异常账号",
                    "login_status": "valid",
                    "today_status": "partial",
                    "automatic": False,
                    "scheduled_time": None,
                    "expiration": None,
                    "latest_run": {
                        "id": "run-fail",
                        "trigger": "manual",
                        "status": "partial",
                        "started_at": 200.0,
                        "finished_at": 210.0,
                        "total": 55,
                        "done_before": 0,
                        "success": 1,
                        "failed": 54,
                        "unknown": 0,
                        "message": "部分失败",
                        "topics": [
                            {
                                "name": f"超话名称非常长用于触发分片检查_{i:02d}_超话",
                                "status": "failed",
                            }
                            for i in range(55)
                        ],
                    },
                },
            ],
        }
        sent_messages = []

        async def rpc(method, plugin_id, payload):
            args = payload["args"]
            if payload["capability"] == "chat.open_session":
                target = args.get("user_id") or args.get("group_id")
                return {
                    "success": True,
                    "stream": {"stream_id": f"{args['chat_type']}:{target}"},
                }
            sent_messages.append((args["stream_id"], args["text"]))
            return {"success": True}

        config = {
            **CONFIG,
            "chats": {
                "query_qq": ["101"],
                "notify_qq": ["303"],
                "notify_groups": ["404"],
                "notify_checkin": "failures_only",
            },
        }
        plugin = setup_plugin(tmp_path, config, rpc, snapshot=snapshot)

        # help / 帮助 without needing read_token or calling _snapshot
        no_token_cfg = {**config, "portal": {"read_token": ""}}
        plugin.set_plugin_config(no_token_cfg)
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "help"}
        )
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "帮助"}
        )
        assert len(sent_messages) == 2
        assert "/微博签到 详情" in sent_messages[0][1]
        assert sent_messages[0][1] == sent_messages[1][1]
        plugin._snapshot.assert_not_called()

        # 异常
        plugin.set_plugin_config(config)
        sent_messages.clear()
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "异常"}
        )
        assert len(sent_messages) == 1
        assert (
            "异常账号" in sent_messages[0][1] and "正常账号" not in sent_messages[0][1]
        )
        assert "异常超话：" in sent_messages[0][1]

        # 详情 with filter
        sent_messages.clear()
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "详情 正常账号"}
        )
        assert len(sent_messages) == 1
        assert "正常超话A：新签成功" in sent_messages[0][1]
        assert "异常账号" not in sent_messages[0][1]

        # 详情 without filter (chunked)
        sent_messages.clear()
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "详情"}
        )
        assert len(sent_messages) >= 2
        assert all(
            text.startswith("微博超话详情 · 2026-11-18（北京时间）")
            for _, text in sent_messages
        )

        # 测试通知
        sent_messages.clear()
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "测试通知"}
        )
        assert (
            "private:303",
            "微博签到通知测试：配置正常（当前签到通知模式：failures_only）。",
        ) in sent_messages
        assert (
            "group:404",
            "微博签到通知测试：配置正常（当前签到通知模式：failures_only）。",
        ) in sent_messages
        assert (
            "private",
            "微博签到测试通知结果：\nqq:303：发送成功\ngroup:404：发送成功",
        ) in sent_messages

        # Unknown subcommand
        sent_messages.clear()
        await plugin.checkin_status(
            "private", "qq", "101", matched_groups={"subcommand": "不存在"}
        )
        assert len(sent_messages) == 1
        assert "/微博签到 help" in sent_messages[0][1]

    asyncio.run(run())


def test_alert_and_run_notify_dedup_retry_and_modes(tmp_path):
    async def run():
        deliveries = []
        fail_group = True

        async def rpc(method, plugin_id, payload):
            assert method == "cap.call" and plugin_id == PLUGIN_ID
            args = payload["args"]
            if payload["capability"] == "chat.open_session":
                assert args["platform"] == "qq" and args["account_id"] == "606"
                if args["chat_type"] == "private":
                    assert args["user_id"] == "303"
                    stream_id = "private"
                else:
                    assert args["group_id"] == "404"
                    stream_id = "group"
                return {"success": True, "stream": {"stream_id": stream_id}}
            assert payload["capability"] == "send.text"
            assert args["storage_message"] is False
            deliveries.append((args["stream_id"], args["text"]))
            return {"success": not (fail_group and args["stream_id"] == "group")}

        config = {
            **CONFIG,
            "chats": {
                "notify_qq": ["303"],
                "notify_groups": ["404"],
                "bot_qq": "606",
                "notify_checkin": "all",
            },
        }
        snapshot = deepcopy(SNAPSHOT)
        snapshot["accounts"][0]["latest_run"]["finished_at"] = time.time() + 1
        plugin = setup_plugin(tmp_path, config, rpc, snapshot=snapshot)
        await plugin.on_load()
        await plugin.on_unload()
        await plugin._notify(plugin.config)
        # First pass: private succeeds for both expiration and run; group fails on expiration so stops before run
        assert [(s, "重新扫码" in t) for s, t in deliveries] == [
            ("private", True),
            ("private", False),
            ("group", True),
        ]

        # Reload with group recovered: only group receives expiration and run; private is not resent
        fail_group = False
        reloaded = setup_plugin(tmp_path, config, rpc, snapshot=snapshot)
        await reloaded.on_load()
        await reloaded.on_unload()
        await reloaded._notify(reloaded.config)
        await reloaded._notify(reloaded.config)
        assert [(s, "重新扫码" in t) for s, t in deliveries[3:]] == [
            ("group", True),
            ("group", False),
        ]
        assert "异常超话：五月天" in deliveries[-1][1]

        # status="expired" run must NOT send a duplicate run notification (expiration alert handles it)
        reloaded._snapshot.return_value["accounts"][0]["expiration"] = {
            "id": "incident-2",
            "detected_at": 456,
        }
        reloaded._snapshot.return_value["accounts"][0]["latest_run"] = {
            "id": "run-expired",
            "trigger": "scheduled",
            "status": "expired",
            "started_at": time.time(),
            "finished_at": time.time() + 1,
            "total": 1,
            "done_before": 0,
            "success": 0,
            "failed": 0,
            "unknown": 0,
            "message": "登录已失效",
            "topics": [],
        }
        deliveries.clear()
        await reloaded._notify(reloaded.config)
        assert [(s, "重新扫码" in t) for s, t in deliveries] == [
            ("private", True),
            ("group", True),
        ]

        # failures_only skips success runs, notifies failed runs; off disables run notifications
        deliveries.clear()
        reloaded.set_plugin_config(
            {
                **CONFIG,
                "chats": {
                    "notify_qq": ["303"],
                    "bot_qq": "606",
                    "notify_checkin": "failures_only",
                },
            }
        )
        reloaded._snapshot.return_value["accounts"][0]["expiration"] = None
        reloaded._snapshot.return_value["accounts"][0]["latest_run"] = {
            "id": "run-ok-2",
            "trigger": "scheduled",
            "status": "success",
            "started_at": time.time(),
            "finished_at": time.time() + 2,
            "total": 1,
            "done_before": 0,
            "success": 1,
            "failed": 0,
            "unknown": 0,
            "message": "完成",
            "topics": [],
        }
        await reloaded._notify(reloaded.config)
        assert deliveries == []

        reloaded._snapshot.return_value["accounts"][0]["latest_run"] = {
            "id": "run-fail-2",
            "trigger": "manual",
            "status": "failed",
            "started_at": time.time(),
            "finished_at": time.time() + 3,
            "total": 1,
            "done_before": 0,
            "success": 0,
            "failed": 1,
            "unknown": 0,
            "message": "网络失败",
            "topics": [{"name": "周杰伦", "status": "failed"}],
        }
        await reloaded._notify(reloaded.config)
        assert len(deliveries) == 1 and "微博签到通知" in deliveries[0][1]

        reloaded.set_plugin_config(
            {
                **CONFIG,
                "chats": {
                    "notify_qq": ["303"],
                    "bot_qq": "606",
                    "notify_checkin": "off",
                },
            }
        )
        reloaded._snapshot.return_value["accounts"][0]["latest_run"]["id"] = (
            "run-fail-3"
        )
        deliveries.clear()
        await reloaded._notify(reloaded.config)
        assert deliveries == []

    asyncio.run(run())


def test_legacy_delivered_migration_runs_since_and_day_rollover(tmp_path):
    async def run():
        # Legacy delivered.json format ({incident_id: [dest]})
        (tmp_path / "delivered.json").write_text(
            json.dumps({"incident-old": ["qq:303"]}),
            encoding="utf-8",
        )
        deliveries = []

        async def rpc(method, plugin_id, payload):
            args = payload["args"]
            if payload["capability"] == "chat.open_session":
                return {"success": True, "stream": {"stream_id": "private"}}
            deliveries.append(args["text"])
            return {"success": True}

        now = time.time()
        snapshot = {
            "day": "2026-11-18",
            "accounts": [
                {
                    "uid": "7777",
                    "nickname": "测试微博",
                    "login_status": "valid",
                    "today_status": "success",
                    "automatic": True,
                    "expiration": None,
                    "latest_run": {
                        "id": "pre-upgrade-run",
                        "trigger": "scheduled",
                        "status": "success",
                        "started_at": now - 300,
                        "finished_at": now - 200,
                        "total": 1,
                        "done_before": 0,
                        "success": 1,
                        "failed": 0,
                        "unknown": 0,
                        "message": "完成",
                        "topics": [],
                    },
                }
            ],
        }
        config = {**CONFIG, "chats": {"notify_qq": ["303"], "notify_checkin": "all"}}
        plugin = setup_plugin(tmp_path, config, rpc, snapshot=snapshot)
        await plugin.on_load()
        await plugin.on_unload()

        # Pre-upgrade run is skipped by runs_since; legacy expiration key was preserved and pruned
        await plugin._notify(plugin.config)
        assert deliveries == []

        # New run after on_load is notified and recorded with today's day
        plugin._snapshot.return_value["accounts"][0]["latest_run"] = {
            "id": "post-upgrade-run",
            "trigger": "scheduled",
            "status": "success",
            "started_at": now + 1,
            "finished_at": now + 2,
            "total": 1,
            "done_before": 0,
            "success": 1,
            "failed": 0,
            "unknown": 0,
            "message": "完成",
            "topics": [],
        }
        await plugin._notify(plugin.config)
        assert len(deliveries) == 1
        saved = json.loads((tmp_path / "delivered.json").read_text(encoding="utf-8"))
        assert "post-upgrade-run" in saved["runs"]
        assert saved["run_days"]["post-upgrade-run"] == "2026-11-18"

        # Next day rolls over and prunes previous day's sent_runs
        plugin._snapshot.return_value["day"] = "2026-11-19"
        plugin._snapshot.return_value["accounts"][0]["latest_run"] = None
        await plugin._notify(plugin.config)
        saved_after = json.loads(
            (tmp_path / "delivered.json").read_text(encoding="utf-8")
        )
        assert saved_after["runs"] == {}
        assert saved_after["run_days"] == {}

    asyncio.run(run())


def test_empty_notification_targets_do_not_poll(tmp_path):
    async def run():
        rpc = AsyncMock()
        plugin = setup_plugin(tmp_path, CONFIG, rpc)
        await plugin._notify(plugin.config)
        plugin._snapshot.assert_not_called()
        rpc.assert_not_called()

    asyncio.run(run())
