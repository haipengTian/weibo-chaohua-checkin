# 前端来源与修改

多用户平台的 `static/portal/portal.css` 使用本地 Credit × CDK UI Starter 中 Credit 的设计变量、侧栏/60px 顶栏/1320px 内容区结构及基础组件几何规范，改写为本项目的静态 CSS 与 JavaScript。

`frontend/src/components/ui/` 的 Input、Button、Select、Popover、Calendar、Switch、Label、Tabs 按需复用本地 `E:/workspace/personal/ai/credit-ui` 的实际源码。Select Viewport 增加本项目的 CSP style nonce；其余基础组件保留原实现。时间选择器由这些基础组件组合；登录、筛选、计划表单与 React 局部挂载由本项目新增。构建产物位于 `static/portal/components/`。

React、Radix、react-day-picker、date-fns、Lucide 及其他打包运行依赖的许可与版权声明见 `licenses/FRONTEND-THIRD-PARTY.txt`，版本以 `frontend/package-lock.json` 为准。

- Credit：<https://github.com/linux-do/credit>，Apache-2.0，完整许可见 `licenses/CREDIT-APACHE-2.0.txt`。保留其浅色/深色设计变量与组件样式基础。
- 修改（2026-11-17）：移除原积分、支付与演示业务，新增微博账号、个人计划、用户列表、异常与日志页面；改为 FastAPI 同源接口与服务端会话。不包含原品牌图片、字体文件、CDK 组件或演示数据。
- 本项目上游代码仍适用根目录 `LICENSE` 中的 MIT 许可。
