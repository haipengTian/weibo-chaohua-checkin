from urllib.parse import urlsplit
import re

from maibot_sdk import Field, PluginConfigBase
from pydantic import field_validator


class PluginSettings(PluginConfigBase):
    __ui_label__ = "插件"
    enabled: bool = Field(default=True, description="启用微博超话签到插件；未配置密钥时不调用面板")
    config_version: str = "1.0.0"


class PortalSettings(PluginConfigBase):
    __ui_label__ = "微博签到面板"
    base_url: str = Field(default="https://wb.thpvip.xyz", description="面板的 HTTPS 地址，不含 API 路径", json_schema_extra={"label": "面板地址"})
    read_token: str = Field(
        default="", repr=False, description="填写面板配置的 MAIBOT_READ_TOKEN",
        json_schema_extra={"input_type": "password", "x-widget": "password", "label": "只读密钥"},
    )

    @field_validator("base_url")
    @classmethod
    def validate_url(cls, value: str) -> str:
        value = value.strip()
        parsed = urlsplit(value)
        if (
            parsed.scheme != "https" or not parsed.hostname or parsed.username is not None
            or parsed.path not in {"", "/"} or parsed.query or parsed.fragment
        ):
            raise ValueError("填写面板的 HTTPS 站点地址，不含账号、路径或查询参数")
        return value.rstrip("/")


class ChatSettings(PluginConfigBase):
    __ui_label__ = "QQ 查询权限与通知接收人"
    query_qq: list[str] = Field(default_factory=list, description="可发送 /微博签到 的 QQ 号，默认无人可查", json_schema_extra={"label": "允许查询的 QQ"})
    query_groups: list[str] = Field(default_factory=list, description="可查询的群号；群内仍须由上面的授权 QQ 发起", json_schema_extra={"label": "允许查询的群"})
    bot_qq: str = Field(default="", description="发送提醒的机器人 QQ；只有一个 QQ 机器人时留空即可", json_schema_extra={"label": "发送机器人 QQ"})
    notify_qq: list[str] = Field(default_factory=list, description="接收登录失效提醒的 QQ 私聊号码", json_schema_extra={"label": "通知私聊 QQ"})
    notify_groups: list[str] = Field(default_factory=list, description="接收登录失效提醒的 QQ 群号；留空不发群", json_schema_extra={"label": "通知群聊"})

    @field_validator("bot_qq")
    @classmethod
    def validate_bot(cls, value: str) -> str:
        value = value.strip()
        if value and not re.fullmatch(r"[0-9]{1,20}", value):
            raise ValueError("机器人 QQ 号只能填写数字")
        return value

    @field_validator("query_qq", "query_groups", "notify_qq", "notify_groups")
    @classmethod
    def validate_ids(cls, values: list[str]) -> list[str]:
        ids = list(dict.fromkeys(value.strip() for value in values))
        if any(not re.fullmatch(r"[0-9]{1,20}", value) for value in ids):
            raise ValueError("QQ 号码和群号只能填写数字，每项一个号码")
        return ids


class WeiboConfig(PluginConfigBase):
    plugin: PluginSettings = Field(default_factory=PluginSettings)
    portal: PortalSettings = Field(default_factory=PortalSettings)
    chats: ChatSettings = Field(default_factory=ChatSettings)
