# 微博超话签到 × 麦麦

私聊麦麦发 `/微博签到`，查看授权微博账号今天（北京时间）的签到结果。微博登录确认失效后，麦麦把重新扫码提醒发到你指定的 QQ 私聊或群。面板和麦麦之间只传状态，不传微博 Cookie；麦麦无需开放新的公网端口。

## 1. 启用签到面板的只读接口

面板和麦麦插件都随 `ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.5` 发布。已有面板先备份配置和数据，然后在服务器 `/opt/weibo-portal/.env.portal` 更新 `PORTAL_IMAGE` 并增加以下两项：

```dotenv
PORTAL_IMAGE=ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.5
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

## 2. 在麦麦配置 QQ 查询和通知

在运行麦麦的电脑上启动 Docker 后执行。下面是当前 Windows 麦麦实例的 PowerShell 命令，其他实例将 `$plugins` 改成实际的插件目录。命令只从镜像提取文件，不启动临时容器，也不覆盖已安装的插件：

```powershell
$image = 'ghcr.io/haipengtian/weibo-chaohua-checkin:portal-v0.1.5'
$plugins = 'E:\workspace\personal\ai\maibot-qq\runtime\plugins'
if (-not (Test-Path -LiteralPath $plugins -PathType Container)) { throw '请先核对麦麦插件目录' }
$plugin = Join-Path $plugins 'haipengtian.weibo-checkin'
if (Test-Path -LiteralPath $plugin) { throw '插件已存在，请先备份现有插件和配置' }
docker pull $image
if ($LASTEXITCODE -ne 0) { throw '拉取镜像失败' }
$container = docker create --pull=never $image
if ($LASTEXITCODE -ne 0) { throw '创建提取容器失败' }
try {
    docker cp "${container}:/app/integrations/maibot" $plugin
    if ($LASTEXITCODE -ne 0) { throw '提取插件失败' }
} finally {
    docker rm $container | Out-Null
}
```

重启麦麦一次，然后在管理页打开「微博超话签到」的插件配置：

| 配置 | 怎么填 |
| --- | --- |
| 面板地址、只读密钥 | 面板 HTTPS 地址（默认 `https://wb.thpvip.xyz`）和上一步生成的密钥 |
| `query_qq` | 可使用 `/微博签到` 的 QQ，默认为空 |
| `query_groups` | 允许查询的群，默认为空；群内仍只响应 `query_qq` 里的发送人 |
| `notify_qq` | 接收失效提醒的 QQ 私聊号码，可填多个 |
| `notify_groups` | 接收失效提醒的群号，可填多个；留空不发群 |
| `bot_qq` | 发送提醒的机器人 QQ；麦麦只连一个 QQ 机器人时可留空 |

查询与提醒是两套名单。机器人必须有权限和配置中的 QQ 私聊，或已经在目标群里；保留麦麦和适配器原有的访问限制。在群里开启查询或提醒前，确认群成员可以看到该集成授权的微博昵称和状态。

保存后，从授权的 QQ 私聊发送 `/微博签到`。通知默认每分钟取一次状态，但面板必须先**检测到**失效；没有失效时不会发消息。首轮也会提醒当前尚未恢复的失效账号。网络异常不会生成失效提醒；同一次失效按接收目标去重，失败目标下轮重试，已发送的目标不会随失败目标重发。重新扫码或登录重新验证正常后结束这次失效，后来再次掉线会再提醒。去重记录保存在麦麦插件数据目录，普通重启后仍保留。

## 接口与排查

`GET /api/integrations/maibot/v1/status` 使用 `Authorization: Bearer <密钥>`。响应包含北京时间日期 `day`、授权账号 `accounts`，以及每个账号的 `today_status`、`login_status`、`automatic` 和当前失效事件 `expiration`。接口只读，不能触发签到或访问其他面板接口。

- `401`：核对两端的密钥是否一致。
- `503`：面板容器未收到有效密钥或 UID 名单。重查 Compose 环境变量配置，不要把完整配置输出到群聊。
- 查询成功但没有账号：核对填写的 UID 是否已在面板绑定。
- 查询正常但提醒发不出：检查接收人配置、机器人 QQ 连接及麦麦插件日志。
