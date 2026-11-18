# 微博超话 · 多用户签到平台

基于 [ranqingwen/weibo-chaohua-checkin](https://github.com/ranqingwen/weibo-chaohua-checkin) 的二开版：用户管理自己的微博与每日计划，管理员负责统计监控。页面沿用本地 credit-ui 的设计，表单直接复用其 Input、Select、Calendar、Popover、Switch 等 React 组件。

## 用户端与管理端

- **用户端 `/`**：注册、登录、绑定多个微博、检测登录、手动签到、按北京时间设置每日计划、查看与筛选自己的执行记录。
- **底部导航**：用户端使用「首页 / 签到记录 / 我的」悬浮菜单（桌面随鼠标距离放大图标，手机点按钮展开），个人计划、外观与退出集中在「我的」；管理端保留侧栏。
- **管理端 `/admin`**：统计概览、用户列表、异常监控、执行记录和事件日志；可手动创建普通用户，在系统设置中开关公开注册。查询支持平台用户、微博 UID、结果和日期。
- **唯一归属**：一个微博 UID 只属于一个平台用户。同用户重扫更新登录；跨用户或并发扫码不能覆盖归属或登录凭据。
- **可靠调度**：SQLite 事务防重，个人计划持久化；当天补执行，失败间隔 10 分钟、每天最多 3 次自动尝试。网络异常、登录失效、部分失败和无超话分别呈现。
- **登录维护**：保存检测与签到返回的新 Cookie；6 小时登录检测。微博登录期限由微博决定，失效需重新扫码。
- **工作台与账号详情**：首页集中展示每日计划、账号状态、本月签到足迹与最近动态；点「配置签到」选择超话，点账号卡片上的「签到记录」查看该微博的全部历史；「检测登录」和「重新扫码」也在卡片上。
- **签到足迹**：按微博账号切换「本月 / 近一年 / 近两年」，查看所选范围的成功天数和当前连续签到天数。近一年、近两年按天显示最近 365 天、730 天的热力图；点日期查看当天明细。
- **自选签到超话**：每个微博独立选择全部关注或指定超话；手动与定时使用同一范围，空选暂停该微博。支持按名称搜索后批量勾选。
- **关注超话与名称**：微博扫码后自动扫描关注列表，可按名称搜索、手动刷新；签到记录保留每个超话的名称和结果，区分此前已签、新签、失败与未执行。

## 本地开始

```powershell
python -m venv .venv
.\.venv\Scripts\python.exe -m pip install -r requirements.txt
$env:PANEL_USER = 'avatar'
$secret = Read-Host '首次管理员密码（12–128 位）' -AsSecureString
$env:PANEL_PASSWORD = [System.Net.NetworkCredential]::new('', $secret).Password
$env:PORTAL_COOKIE_SECURE = '0' # 仅本机 HTTP
.\.venv\Scripts\python.exe -m uvicorn portal:app --host 127.0.0.1 --port 8788 --workers 1
```

打开 `http://127.0.0.1:8788`。普通用户从登录页注册；管理员由首次启动环境变量创建。已有数据库不随环境变量修改密码。

**[完整使用、迁移、反代与回退说明](docs/多用户平台使用与升级.md)**

## Docker 与旧版兼容

新平台用 `compose.portal.yaml`，候选端口只监听 `127.0.0.1:8788`，使用独立的 `portal-data/`。复制 `.env.portal.example` 为 `.env.portal` 后再填写凭据。公网使用 HTTPS 和 Secure Cookie，按部署说明配置可信反代来源。

服务器推荐拉取 GHCR 的固定版本镜像，无需上传源码或在服务器构建。发布标签 `portal-v*` 会触发独立的镜像构建流程，不覆盖旧版 `latest`。设置 `.env.portal` 的 `PORTAL_IMAGE` 后执行：

```bash
docker compose --env-file .env.portal -f compose.portal.yaml pull
docker compose --env-file .env.portal -f compose.portal.yaml up -d --no-build --wait
```

需要在 QQ 查询签到或接收微博登录失效提醒时，使用[麦麦插件与配置说明](integrations/maibot/README.md)。

不需要旧账号和记录时，使用[直接替换说明](docs/多用户平台使用与升级.md#不需要旧账号和记录时直接替换旧面板)。需要保留时，按[迁移说明](docs/多用户平台使用与升级.md#需要保留旧账号时迁移后切-nginx)备份和离线导入，不直接启动新平台。部署后可将 `PORTAL_IMAGE` 固定到该发布的镜像 digest，后续升级只改镜像引用。

旧 `python app.py`、`docker-compose.yml` 和 Docker 镜像默认命令保持旧单面板用法。新平台需显式选择 `portal:app`；不要将两个入口指向同一份活跃数据。

旧版 JSON 通过离线迁移命令导入指定管理员名下，原 JSON 保留并备份；发现未迁移的旧账号文件时，新平台拒绝直接空启动。旧版通知配置、密码自动重登和全局面板会话不带入新平台。用户通知渠道、账号解绑/转移、邮件验证和自助找回密码尚未纳入首版。

- [旧版单面板使用说明](docs/legacy-panel.md)
- [需求确认单](docs/多用户签到平台%20·%20需求功能拆解与实现确认单.md)
- [本地验收记录](docs/多用户平台验收记录.md)

## 测试与源码

```powershell
.\.venv\Scripts\python.exe -m pip install -r requirements-dev.txt
.\.venv\Scripts\python.exe -m pytest -q
```

`portal.py` 提供 HTTP 与权限边界；`portal_db.py` 管理数据、筛选与迁移；`portal_tasks.py` 负责调度和执行状态；`portal_weibo.py` 复用上游微博核心并启用严格错误分类。

表单源码在 `frontend/`。仓库保留已构建静态文件，可直接按上面的 Python 入口启动；修改组件后用 Node.js 22 构建：

```powershell
cd frontend
npm ci
npm run build
```

构建会更新 `static/portal/components/`，源码与产物一起交付。Docker 在独立 Node 构建阶段生成组件，运行阶段仍只有 Python。浏览器测试运行方式见[使用说明](docs/多用户平台使用与升级.md#本地验证)。

## 来源与许可

上游应用采用 [MIT](LICENSE)；Credit 样式来源与修改见 [NOTICE](NOTICE.md)，完整 Apache-2.0 许可在 `licenses/`。上游微博接口来源与致谢保留在[旧版说明](docs/legacy-panel.md)。

扫码与签到依赖微博非公开接口及其风控规则，部署前使用获授权的微博账号进行真实验收。
