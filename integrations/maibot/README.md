# 微博超话签到 × 麦麦

私聊或在授权群内向麦麦发 `/微博签到`（支持 `异常`、`详情`、`测试通知`、`help`），即可查看授权微博账号今天（北京时间）的签到结果与超话明细。每次签到完成或微博登录确认失效后，麦麦也会主动将通知发到你指定的 QQ 私聊或群。面板和麦麦之间只传状态，不传微博 Cookie；麦麦无需开放新的公网端口。

## 1. 在管理端启用并配置麦麦集成

面板和麦麦插件都随 `ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.7` 发布。先将面板更新到新版镜像（保留原 `portal-data/`）：

```bash
cd /opt/weibo-portal &&
sed -i 's|^PORTAL_IMAGE=.*|PORTAL_IMAGE=ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.7|' .env.portal &&
docker compose --env-file .env.portal pull weibo-portal &&
docker compose --env-file .env.portal up -d --no-build --wait weibo-portal &&
curl -fsS http://127.0.0.1:8787/healthz
```

更新完成后，用管理员账号打开面板管理端 **「系统设置」→「麦麦集成」**：

1. 开启 **启用麦麦只读接口**。
2. 点击 **生成密钥**（或需要更换时点击 **重置密钥**），复制仅展示一次的明文密钥。不要在群聊、日志或 Git 中粘贴密钥。
3. 在 **授权微博账号** 列表中勾选允许麦麦查询和提醒的微博账号（最多 50 个），点击 **保存麦麦配置**。

> 兼容说明：如果之前已经在 `/opt/weibo-portal/.env.portal` 中配置过 `MAIBOT_READ_TOKEN` 和 `MAIBOT_ACCOUNT_UIDS`，升级后无需改配置文件即可无缝继续生效；在管理端点击 **保存麦麦配置** 或 **重置密钥** 后，对应配置即切换为管理端接管，不再受 `.env.portal` 环境变量影响。

## 2. 在麦麦安装或升级插件

从 `portal-v0.1.7` 镜像提取 `_manifest.json`、`config.py`、`plugin.py`、`LICENSE` 到麦麦的 `runtime/plugins/haipengtian.weibo-checkin/` 目录。

如果你从 `portal-v0.1.5` / `portal-v0.1.6` 升级：若麦麦插件已是 `portal-v0.1.6` 且本次未重置密钥，麦麦容器无需改动；如需提取或升级插件，**只覆盖插件代码文件，保留原有的 `data/`（含 `delivered.json` 去重记录）和 WebUI 插件配置**，并仅重启麦麦主容器（不要重启适配器容器）：

```bash
IMAGE="ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.7"
PLUGIN_DIR="/opt/maibot-qq/runtime/plugins/haipengtian.weibo-checkin"
CID=$(docker create --pull=never "$IMAGE") &&
mkdir -p "$PLUGIN_DIR" &&
for f in _manifest.json config.py plugin.py LICENSE; do
  docker cp "${CID}:/app/integrations/maibot/${f}" "${PLUGIN_DIR}/${f}"
done &&
docker rm "$CID"
```

重启麦麦后，在管理页打开「微博超话签到」的插件配置：

| 配置 | 怎么填 |
| --- | --- |
| 面板地址、只读密钥 | 面板 HTTPS 地址（默认 `https://wb.thpvip.xyz`）和管理端生成的只读密钥 |
| `query_qq` | 可使用 `/微博签到` 及其子命令的 QQ，默认为空 |
| `query_groups` | 允许查询的群，默认为空；群内仍只响应 `query_qq` 里的发送人 |
| `notify_qq` | 接收签到结果和登录失效提醒的 QQ 私聊号码，可填多个 |
| `notify_groups` | 接收签到结果和登录失效提醒的群号，可填多个；留空不发群 |
| `notify_checkin` | 签到完成推送策略：`all` 全部结果（默认）、`failures_only` 仅失败或异常、`off` 关闭 |
| `bot_qq` | 发送提醒的机器人 QQ；麦麦只连一个 QQ 机器人时可留空 |

查询与提醒是两套名单。机器人必须有权限和配置中的 QQ 私聊，或已经在目标群里；保留麦麦和适配器原有的访问限制。在群里开启查询或提醒前，确认群成员可以看到该集成授权的微博昵称和状态。

## 3. QQ 可用指令与主动通知

向麦麦私聊或在授权群内发送（需发送人在 `query_qq` 中）：

- `/微博签到`：查看所有授权账号今日签到概览（含完成度 `done/total`）
- `/微博签到 异常`：仅查看今日异常或登录失效账号及异常超话
- `/微博签到 详情 [昵称或UID]`：查看今日签到统计与每个超话明细，长消息自动分片
- `/微博签到 测试通知`：向已配置的 `notify_qq` / `notify_groups` 发送测试消息并回报结果
- `/微博签到 help`（或 `帮助`）：查看可用指令说明

主动通知默认每分钟轮询一次面板状态：

- **签到完成通知**：当 `notify_checkin` 为 `all` 或 `failures_only` 时，签到完成后按 `run_id` 与接收目标去重推送（单目标失败下轮仅重试失败目标）；登录失效造成的 `expired` 运行由失效提醒单独通知，不重复发送。首次加载插件若无历史记录，会自动跳过加载前的历史运行，只推送之后新完成的签到。
- **登录失效提醒**：面板检测到微博账号登录失效后触发，同一次失效按接收目标去重，重新扫码恢复后结束本次失效。

去重记录保存在麦麦插件 `data/delivered.json`，普通重启后仍保留，次日自动清理前一日的签到去重记录。

## 接口与排查

`GET /api/integrations/maibot/v1/status` 使用 `Authorization: Bearer <密钥>`。响应包含北京时间日期 `day`、授权账号 `accounts`，以及每个账号的 `today_status`、`login_status`、`automatic`、`scheduled_time`、当前失效事件 `expiration` 和今日最近一次执行 `latest_run`（含 `topics` 明细）。接口只读，不能触发签到或访问其他面板接口。

- `401`：核对两端的密钥是否一致；在管理端重置密钥后需同步更新麦麦插件配置。
- `503`：管理端尚未开启麦麦集成、未生成只读密钥，或尚未勾选任何授权微博账号。
- 查询成功但没有账号：核对管理端勾选的 UID 是否仍处于绑定状态。
- 查询正常但提醒发不出：发送 `/微博签到 测试通知` 排查接收人配置、机器人 QQ 连接及麦麦插件日志。
