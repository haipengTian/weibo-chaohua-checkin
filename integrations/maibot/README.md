# 微博超话签到 × 麦麦

私聊或在授权群内向麦麦发 `/微博签到`（支持 `异常`、`详情`、`测试通知`、`help`），即可查看授权微博账号今天（北京时间）的签到结果与超话明细。每次签到完成或微博登录确认失效后，麦麦也会主动将通知发到你指定的 QQ 私聊或群。面板和麦麦之间只传状态，不传微博 Cookie；麦麦无需开放新的公网端口。

## 1. 启用或更新签到面板的只读接口

面板和麦麦插件都随 `ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.6` 发布。已有面板先备份配置和数据，然后在服务器 `/opt/weibo-portal/.env.portal` 更新 `PORTAL_IMAGE` 并确认以下配置：

```dotenv
PORTAL_IMAGE=ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.6
MAIBOT_READ_TOKEN=替换为随机密钥
MAIBOT_ACCOUNT_UIDS=替换为允许机器人查询和提醒的微博UID
```

在自己的终端用 `openssl rand -hex 32` 生成密钥。UID 是面板账号卡片上的**微博 UID**，不是 QQ 号；多个用英文逗号隔开（最多 50 个），不支持通配符。未同时配置有效密钥和 UID 时接口关闭。不要在群聊、日志或 Git 中粘贴密钥。

新版 `compose.portal.yaml` 已声明这两项容器环境变量。如果线上仍在用最初安装的 `compose.yaml`，将下面的内容新增到同目录的 `compose.override.yaml`（已有文件时合并，保留原配置）：

```yaml
services:
  weibo-portal:
    environment:
      MAIBOT_READ_TOKEN: ${MAIBOT_READ_TOKEN:-}
      MAIBOT_ACCOUNT_UIDS: ${MAIBOT_ACCOUNT_UIDS:-}
```

执行以下命令，只更新面板容器，继续挂载原 `portal-data/`：

```bash
cd /opt/weibo-portal &&
docker compose --env-file .env.portal pull weibo-portal &&
docker compose --env-file .env.portal up -d --no-build --wait weibo-portal &&
curl -fsS http://127.0.0.1:8787/healthz
```

## 2. 在麦麦安装或升级插件

从 `portal-v0.1.6` 镜像提取 `_manifest.json`、`config.py`、`plugin.py`、`LICENSE` 到麦麦的 `runtime/plugins/haipengtian.weibo-checkin/` 目录。

如果你从 `portal-v0.1.5` 升级，**只覆盖插件代码文件，保留原有的 `data/`（含 `delivered.json` 去重记录）和 WebUI 插件配置**，并仅重启麦麦主容器（不要重启适配器容器）。例如在 Linux 服务器：

```bash
IMAGE="ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.6"
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
| 面板地址、只读密钥 | 面板 HTTPS 地址（默认 `https://wb.thpvip.xyz`）和上一步生成的密钥 |
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

- `401`：核对两端的密钥是否一致。
- `503`：面板容器未收到有效密钥或 UID 名单。重查 Compose 环境变量配置，不要把完整配置输出到群聊。
- 查询成功但没有账号：核对填写的 UID 是否已在面板绑定。
- 查询正常但提醒发不出：发送 `/微博签到 测试通知` 排查接收人配置、机器人 QQ 连接及麦麦插件日志。
