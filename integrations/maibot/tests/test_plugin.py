"""Exercise the installed SDK's chat and send proxies without sending QQ messages."""

import asyncio
from copy import deepcopy
from unittest.mock import AsyncMock

from maibot_sdk import PluginContext, PluginPaths

from integrations.maibot.plugin import create_plugin

PLUGIN_ID = "haipengtian.weibo-checkin"
TOKEN = "read-only-test-token-0123456789-secret"
CONFIG = {"plugin": {"config_version": "1.0.0"}, "portal": {"read_token": TOKEN}, "chats": {"query_qq": ["101"]}}
SNAPSHOT = {
    "day": "2026-11-18",
    "accounts": [{
        "uid": "7777", "nickname": "测试微博", "login_status": "expired", "today_status": "partial",
        "automatic": True, "expiration": {"id": "incident-1", "detected_at": 123},
    }],
}


def setup_plugin(tmp_path, config, rpc):
    plugin = create_plugin()
    plugin._set_context(PluginContext(PLUGIN_ID, rpc_call=rpc, paths=PluginPaths(tmp_path, tmp_path)))
    plugin.set_plugin_config(config)
    plugin._snapshot = AsyncMock(return_value=deepcopy(SNAPSHOT))
    return plugin


def test_command_permissions_fail_closed(tmp_path):
    async def run():
        rpc = AsyncMock(return_value={"success": True})
        plugin = setup_plugin(tmp_path, CONFIG, rpc)
        await plugin.checkin_status("private", "qq", "999")
        await plugin.checkin_status("group", "qq", "101", "777")
        await plugin.checkin_status("web", "web", "101")
        rpc.assert_not_called()
        plugin._snapshot.assert_not_called()

        await plugin.checkin_status("private", "qq", "101")
        rpc.assert_awaited_once()
        sent = rpc.call_args.args[2]["args"]
        assert sent["stream_id"] == "private" and sent["storage_message"] is False
        assert "部分失败 · 登录失效" in sent["text"]

        plugin.set_plugin_config({**CONFIG, "chats": {"query_qq": ["101"], "query_groups": ["777"]}})
        rpc.reset_mock()
        await plugin.checkin_status("group", "qq", "999", "777")
        rpc.assert_not_called()
        await plugin.checkin_status("group", "qq", "101", "777")
        assert rpc.call_args.args[2]["args"]["stream_id"] == "group"

    asyncio.run(run())


def test_alert_retries_only_failed_destination_and_survives_reload(tmp_path):
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
            assert "重新扫码" in args["text"] and args["storage_message"] is False
            deliveries.append(args["stream_id"])
            return {"success": not (fail_group and args["stream_id"] == "group")}

        config = {**CONFIG, "chats": {"notify_qq": ["303"], "notify_groups": ["404"], "bot_qq": "606"}}
        plugin = setup_plugin(tmp_path, config, rpc)
        await plugin._notify(plugin.config)
        assert deliveries == ["private", "group"]

        fail_group = False
        reloaded = setup_plugin(tmp_path, config, rpc)
        await reloaded.on_load()
        await reloaded.on_unload()
        await reloaded._notify(reloaded.config)
        await reloaded._notify(reloaded.config)
        assert deliveries == ["private", "group", "group"]

        reloaded._snapshot.return_value["accounts"][0]["expiration"] = None
        await reloaded._notify(reloaded.config)
        reloaded._snapshot.return_value["accounts"][0]["expiration"] = {"id": "incident-2", "detected_at": 456}
        await reloaded._notify(reloaded.config)
        assert deliveries[-2:] == ["private", "group"]
        assert len(deliveries) == 5

    asyncio.run(run())


def test_empty_notification_targets_do_not_poll(tmp_path):
    async def run():
        rpc = AsyncMock()
        plugin = setup_plugin(tmp_path, CONFIG, rpc)
        await plugin._notify(plugin.config)
        plugin._snapshot.assert_not_called()
        rpc.assert_not_called()

    asyncio.run(run())
