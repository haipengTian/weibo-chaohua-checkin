import {
  mountControls,
  unmountControls,
} from "/assets/components/credit-controls.js";
("use strict");
const $ = (id) => document.getElementById(id);
const escapeHTML = (value) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (char) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        char
      ],
  );
const paths = {
  user: '<circle cx="12" cy="8" r="4"/><path d="M5 21v-2a7 7 0 0 1 14 0v2"/>',
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-9h6v9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  list: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 12h6M9 17h4"/>',
  users:
    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  shield:
    '<path d="m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6Z"/><path d="m8 12 3 3 5-6"/>',
  alert:
    '<path d="M10.3 3.9 1.8 18.1A2 2 0 0 0 3.5 21h17a2 2 0 0 0 1.7-2.9L13.7 3.9a2 2 0 0 0-3.4 0Z"/><path d="M12 9v4M12 17h.01"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="m8 12 3 3 5-6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  qr: '<path d="M9 3H3v6h6ZM21 3h-6v6h6ZM9 15H3v6h6ZM15 15h3v3h3v3h-6ZM21 12h-3M12 3v3M12 12h3M3 12h3M12 18v3"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  logout: '<path d="M9 21H4V3h5M14 8l5 4-5 4M8 12h11"/>',
  moon: '<path d="M21 12.8A9 9 0 0 1 11.2 3 9 9 0 1 0 21 12.8Z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>',
  refresh: '<path d="M20 8A8 8 0 1 0 21 14M20 3v5h-5"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  panel:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M5.5 7h.01M5.5 11h.01"/>',
  arrow: '<path d="M5 12h14m-5-5 5 5-5 5"/>',
};
const icon = (name) =>
  `<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">${paths[name] || paths.list}</svg>`;
const labels = {
  valid: "登录有效",
  expired: "登录失效",
  error: "检测异常",
  unknown: "待检测",
  success: "成功",
  partial: "部分失败",
  failed: "失败",
  network_error: "网络 / 接口异常",
  no_topics: "未获取到超话",
  interrupted: "任务中断",
  queued: "等待执行",
  running: "正在签到",
  created: "已创建",
  conflict: "绑定冲突",
};
const kinds = {
  auth: "账号认证",
  binding: "微博绑定",
  schedule: "计划变更",
  checkin: "超话签到",
  login_check: "登录检测",
  migration: "数据迁移",
  qr: "扫码登录",
  system: "系统设置",
  topic_scan: "超话扫描",
  topic_settings: "签到范围",
};
const badge = (status) =>
  `<span class="badge ${escapeHTML(status)}"><span class="dot"></span>${escapeHTML(labels[status] || status || "暂无记录")}</span>`;
const formatTime = (timestamp, full = false) =>
  timestamp
    ? new Intl.DateTimeFormat("zh-CN", {
        timeZone: "Asia/Shanghai",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        ...(full ? { year: "numeric" } : {}),
      }).format(new Date(timestamp * 1000))
    : "尚未检测";
const daysAgo = (days = 0) =>
  new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date(Date.now() - days * 86400_000));
const today = () => daysAgo(0);
const defaultFilter = (type) =>
  !isAdmin && type === "runs"
    ? { start: daysAgo(6), end: today() }
    : { start: today(), end: today() };
let user,
  isAdmin = location.pathname === "/admin",
  view,
  renderId = 0,
  toastTimer,
  qrTimer,
  qrId,
  qrGeneration = 0;
const filters = {},
  pages = {};
let planCache = { enabled: false, time: "08:00" };
const topicSummaries = new Map();
let accountsCache = [],
  refreshPending = false,
  workspaceDay = today();

async function api(path, method = "GET", body) {
  const response = await fetch(path, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-Requested-With": "WeiboPortal",
    },
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });
  if (response.status === 401) {
    location.assign("/login");
    throw new Error("登录已过期");
  }
  let data;
  try {
    data = await response.json();
  } catch (_) {
    throw new Error("服务暂时不可用，请稍后重试");
  }
  if (!response.ok)
    throw new Error(
      typeof data.detail === "string" ? data.detail : "请检查填写内容后重试",
    );
  return data;
}
function toast(message) {
  clearTimeout(toastTimer);
  $("toast").textContent = message;
  $("toast").hidden = false;
  toastTimer = setTimeout(() => {
    $("toast").hidden = true;
  }, 5000);
}
const errorBox = (message) =>
  `<div class="error-box" role="alert">${escapeHTML(message)} <button class="button small secondary" data-action="refresh">重新加载</button></div>`;
function empty(
  title,
  description,
  name = "list",
  action = "",
  compact = false,
) {
  return `<div class="empty ${compact ? "compact" : ""}"><div class="empty-icon">${icon(name)}</div><h3>${title}</h3><p>${description}</p>${action}</div>`;
}
const addButton = (small = false) =>
  `<button class="button ${small ? "small" : ""}" data-action="bind">${icon("plus")}绑定微博</button>`;
function stat(label, value, note, name, { href = "", tone = "" } = {}) {
  const cls = `card stat${href ? " stat-link" : ""}${tone ? ` stat-${tone}` : ""}`;
  const body = `<div class="stat-label">${label}${icon(name)}</div><div class="stat-value mono">${escapeHTML(value)}</div><div class="stat-note">${escapeHTML(note)}</div>`;
  return href
    ? `<a class="${cls}" href="${escapeHTML(href)}">${body}</a>`
    : `<div class="${cls}">${body}</div>`;
}
const userNav = [
  ["home", "首页", "home"],
  ["runs", "签到记录", "list"],
  ["settings", "我的", "user"],
];
const adminNav = [
  ["overview", "监控概览", "grid"],
  ["users", "用户列表", "users"],
  ["anomalies", "异常监控", "alert"],
  ["runs", "执行记录", "list"],
  ["logs", "运行日志", "list"],
  ["system-settings", "系统设置", "shield"],
];
// Navigation and distance scaling adapted from CDK FloatingDock; see NOTICE.md.
function clientDock() {
  const links = userNav.map(([id, text, name]) =>
    `<a href="#${id}" class="dock-link" data-view="${id}" aria-label="${text}">${icon(name)}<span class="dock-label" aria-hidden="true">${text}</span></a>`,
  );
  return `<div class="client-dock"><button type="button" class="dock-toggle" aria-label="导航菜单" aria-expanded="false" aria-controls="client-nav">${icon("panel")}</button><nav id="client-nav" class="dock-nav" aria-label="主导航">${links.slice(0, 2).join("")}<span class="dock-divider" aria-hidden="true"></span>${links[2]}</nav></div>`;
}
function setupClientDock() {
  const dock = document.querySelector(".client-dock");
  const toggle = dock.querySelector(".dock-toggle");
  const nav = $("client-nav");
  const links = Array.from(nav.querySelectorAll(".dock-link"));
  const magnify = matchMedia(
    "(min-width: 761px) and (any-pointer: fine) and (prefers-reduced-motion: no-preference)",
  );
  const mobile = matchMedia("(max-width: 760px)");
  const isOpen = () => toggle.getAttribute("aria-expanded") === "true";
  const close = (restoreFocus = false) => {
    if (!isOpen()) return;
    toggle.setAttribute("aria-expanded", "false");
    if (restoreFocus && mobile.matches) toggle.focus();
  };
  toggle.addEventListener("click", () => {
    if (isOpen()) close();
    else toggle.setAttribute("aria-expanded", "true");
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest(".dock-link"))
      close(nav.contains(document.activeElement));
  });
  document.addEventListener("click", (event) => {
    if (!dock.contains(event.target)) close(dock.contains(document.activeElement));
  });
  dock.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) {
      event.stopPropagation();
      close(true);
    }
  });
  const closeAfterNavigation = () => close(dock.contains(document.activeElement));
  window.addEventListener("hashchange", closeAfterNavigation);
  mobile.addEventListener("change", closeAfterNavigation);

  const reset = () =>
    links.forEach((link) => link.style.removeProperty("--dock-grow"));
  nav.addEventListener("pointermove", (event) => {
    if (!magnify.matches || event.pointerType === "touch") return;
    // Read all centers before resizing any item.
    const distances = links.map((link) => {
      const { left, width } = link.getBoundingClientRect();
      return Math.abs(event.clientX - left - width / 2);
    });
    links.forEach((link, index) => {
      link.style.setProperty("--dock-grow", Math.max(0, 1 - distances[index] / 150));
    });
  });
  nav.addEventListener("pointerleave", reset);
  magnify.addEventListener("change", reset);
}
function syncThemeButtons() {
  const dark = document.documentElement.classList.contains("dark");
  const label = dark ? "切换到浅色模式" : "切换到深色模式";
  document.querySelectorAll('[data-action="theme"]').forEach((btn) => {
    btn.innerHTML = icon(dark ? "sun" : "moon");
    btn.setAttribute("aria-label", label);
    btn.title = label;
  });
}
function shell() {
  document.body.classList.toggle("client-mode", !isAdmin);
  document.body.classList.toggle("admin-mode", isAdmin);
  if (!isAdmin) {
    $("app").innerHTML =
      `<div class="client-shell"><header class="client-header"><a class="client-brand" href="#home" aria-label="超话首页"><img src="/assets/mark.svg" alt=""><span>超话<small>DAILY CHECK-IN</small></span></a><div class="client-header-right"><button type="button" class="icon-button" data-action="theme" aria-label="切换明暗主题">${icon("moon")}</button><a class="client-account" href="#settings" aria-label="我的账号"><span>${escapeHTML(user.username)}</span><span class="avatar">${escapeHTML(user.username.slice(0, 1).toUpperCase())}</span></a></div></header><main class="content client-content" id="main"></main>${clientDock()}</div><div id="account-panel-host" data-credit-form="account-panel"></div>`;
    $("app").setAttribute("aria-busy", "false");
    syncThemeButtons();
    setupClientDock();
    mountControls($("app"));
    return;
  }
  const nav = isAdmin ? adminNav : userNav;
  $("app").innerHTML =
    `<button class="backdrop" data-action="menu" aria-label="收起导航"></button><aside class="sidebar" id="sidebar"><a class="brand" href="${isAdmin ? "/admin" : "/"}" aria-label="超话签到工作台" title="超话签到工作台"><img src="/assets/mark.svg" alt=""><span>超话<small>DAILY CHECK-IN</small></span></a><div class="nav-label">${isAdmin ? "管理与监控" : "我的工作空间"}</div><nav aria-label="主导航">${nav.map(([id, text, name]) => `<a class="nav-link" href="#${id}" data-view="${id}" aria-label="${text}" title="${text}">${icon(name)}<span class="nav-text">${text}</span></a>`).join("")}</nav><div class="sidebar-bottom">${user.role === "admin" ? `<a class="workspace-switch" href="${isAdmin ? "/" : "/admin"}" aria-label="${isAdmin ? "返回用户端" : "管理控制台"}" title="${isAdmin ? "返回用户端" : "管理控制台"}">${icon(isAdmin ? "home" : "shield")}<span>${isAdmin ? "返回用户端" : "管理控制台"}</span><span>↗</span></a>` : ""}<div class="user-block"><div class="avatar" title="${escapeHTML(user.username)}">${escapeHTML(user.username.slice(0, 1).toUpperCase())}</div><div class="user-meta"><strong>${escapeHTML(user.username)}</strong><small>${user.role === "admin" ? "平台管理员" : "平台用户"}</small></div><button class="icon-button" data-action="logout" aria-label="退出登录">${icon("logout")}</button></div></div></aside><div class="shell"><header class="topbar"><button class="icon-button sidebar-toggle" data-action="menu" aria-controls="sidebar" aria-label="收起侧边栏" title="收起侧边栏">${icon("panel")}</button><span class="crumb">${isAdmin ? "管理端" : "用户端"} <span aria-hidden="true">/</span> <b id="breadcrumb"></b></span><div class="topbar-right"><span class="timezone">${icon("clock")}北京时间 · UTC+8</span><button class="icon-button" data-action="theme" aria-label="切换明暗主题">${icon("moon")}</button></div></header><main class="content" id="main"></main></div><div id="account-panel-host" data-credit-form="account-panel"></div>`;
  $("app").setAttribute("aria-busy", "false");
  syncThemeButtons();
  updateSidebarToggle();
  mountControls($("app"));
}
const mobileNavigation = matchMedia("(max-width: 640px)");
function updateSidebarToggle() {
  const toggle = document.querySelector(".sidebar-toggle");
  if (!toggle) return;
  const expanded = mobileNavigation.matches
    ? document.body.classList.contains("nav-open")
    : !document.documentElement.classList.contains("sidebar-collapsed");
  const label = expanded ? "收起侧边栏" : "展开侧边栏";
  toggle.setAttribute("aria-expanded", String(expanded));
  toggle.setAttribute("aria-label", label);
  toggle.title = label;
}
mobileNavigation.addEventListener("change", () => {
  document.body.classList.remove("nav-open");
  updateSidebarToggle();
});
const footer = () =>
  isAdmin
    ? `<footer class="footer"><span>超话 · 管理控制台</span></footer>`
    : "";
function heading(title, description, action = "") {
  return `<div class="page-heading"><div>${isAdmin ? '<span class="eyebrow">CONTROL CENTER</span>' : ""}<h1 tabindex="-1">${title}</h1>${description ? `<p>${description}</p>` : ""}</div><div class="actions">${action}</div></div>`;
}
const refreshButton = () =>
  `<button class="button secondary" data-action="refresh">${icon("refresh")}刷新</button>`;

function scopeSummary(account) {
  const data = topicSummaries.get(account.id);
  if (account.topics_paused) return "未选择超话 · 已暂停";
  if (!data) return "查看并配置签到范围";
  if (data.selection.mode === "selected")
    return `自选 ${data.selection.topic_ids.length} 个超话`;
  return data.scan?.complete
    ? `全部 ${data.scan.items.length} 个关注超话`
    : "全部关注的超话";
}
async function loadTopicSummaries(accounts) {
  await Promise.allSettled(
    accounts
      .filter((account) => !topicSummaries.has(account.id))
      .map(async (account) => {
        const data = await api(
          `/api/accounts/${encodeURIComponent(account.id)}/topics`,
        );
        topicSummaries.set(account.id, data);
      }),
  );
}
function accountRows(accounts) {
  if (!accounts.length)
    return empty(
      "连接你的第一个微博",
      "扫码绑定后，选择要签到的超话。",
      "qr",
      addButton(),
    );
  return accounts
    .map((account) => {
      const done = account.last_success_date === today();
      const expired = account.login_status === "expired";
      const status = account.busy
        ? "running"
        : done
          ? "success"
          : expired
            ? "expired"
            : account.topics_paused
              ? "paused"
              : "waiting";
      const result = account.busy
        ? "正在签到"
        : done
          ? "今日已完成"
          : expired
            ? "需要重新登录"
            : account.topics_paused
              ? "签到已暂停"
              : "今日待签到";
      const note = account.busy
        ? "任务执行中，稍后自动更新"
        : done
          ? "所选范围已全部签到"
          : expired
            ? "扫码后可继续签到"
            : account.topics_paused
              ? "配置超话后即可恢复"
              : ["partial", "failed", "network_error", "interrupted"].includes(
                    account.last_result,
                  )
                ? `最近${labels[account.last_result]}，可重试`
                : "按计划执行，也可手动签到";
      return `<article class="workspace-account"><div class="account-identity"><div class="avatar">${escapeHTML((account.nickname || "微").slice(0, 1))}</div><div class="account-body"><div class="account-name"><strong>${escapeHTML(account.nickname || "微博用户")}</strong>${badge(account.login_status)}</div><div class="account-scope">${escapeHTML(scopeSummary(account))}</div><div class="account-uid mono">UID ${escapeHTML(account.uid)}</div></div></div><div class="account-outcome ${status}"><strong>${icon(account.busy ? "clock" : done ? "check" : expired ? "alert" : "clock")}${result}</strong><p>${escapeHTML(note)}</p></div><div class="account-row-actions"><div class="actions"><button class="button secondary" data-action="topics" data-id="${escapeHTML(account.id)}">配置签到</button>${expired ? `<button class="button" data-action="bind">重新扫码</button>` : `<button class="button" data-action="checkin" data-id="${escapeHTML(account.id)}" ${account.busy || account.topics_paused || done ? "disabled" : ""}>${done ? "今日已签到" : account.busy ? "执行中…" : "签到"}</button>`}</div><div class="account-secondary-actions"><button type="button" class="account-detail-link" data-action="account-runs" data-id="${escapeHTML(account.id)}">签到记录 ${icon("arrow")}</button><details class="account-more"><summary class="account-detail-link" aria-label="更多操作">···</summary><div class="account-more-menu" role="menu"><button type="button" class="account-more-item" role="menuitem" data-action="check" data-id="${escapeHTML(account.id)}">检测登录</button>${expired ? "" : '<button type="button" class="account-more-item" role="menuitem" data-action="bind">重新扫码</button>'}</div></details></div></div></article>`;
    })
    .join("");
}
function planSummary(plan) {
  return `<div class="plan-summary-icon">${icon("clock")}</div><div class="plan-summary-text"><div><strong>每日自动签到</strong><span class="badge ${plan.enabled ? "valid" : ""}">${plan.enabled ? "已开启" : "已暂停"}</span></div><p>${plan.enabled ? `每天 <b class="mono">${escapeHTML(plan.time)}</b>` : `计划时间 ${escapeHTML(plan.time)}`}<span>北京时间 · 全部绑定账号</span></p></div><button class="button secondary small" data-action="plan">修改计划</button>`;
}
function recentActivity(data) {
  if (!data.items.length)
    return `<p class="activity-empty">还没有执行记录，完成首次签到后会显示在这里。</p>`;
  return `<div class="activity-list">${data.items
    .slice(0, 3)
    .map(
      (run) =>
        `<div class="activity-row"><span class="activity-mark ${escapeHTML(run.status)}">${icon(run.status === "success" ? "check" : "clock")}</span><div class="activity-copy"><strong>${escapeHTML(run.nickname || "微博用户")}</strong><p>${run.trigger === "scheduled" ? "自动签到" : "手动签到"} · 已签 ${Number(run.done_before)} / 新签 ${Number(run.success)} / 失败 ${Number(run.failed)}</p></div>${badge(run.status)}<time class="mono">${formatTime(run.started_at)}</time></div>`,
    )
    .join("")}</div>`;
}
function creditForm(props) {
  return `<div data-credit-form="${props.kind}" data-props="${escapeHTML(JSON.stringify(props))}"></div>`;
}
function planForm(plan) {
  return creditForm({ kind: "plan", plan });
}
function table(
  columns,
  rows,
  data,
  {
    pager = true,
    emptyTitle = "暂无记录",
    emptyDescription = "记录产生后会显示在这里。",
  } = {},
) {
  const bottom = pager
    ? `<div class="table-bottom"><span>共 ${data.total} 条 · 第 ${data.page} 页</span><div class="actions"><button class="button small secondary" data-action="previous" ${data.page <= 1 ? "disabled" : ""}>上一页</button><button class="button small secondary" data-action="next" ${data.page * data.page_size >= data.total ? "disabled" : ""}>下一页</button></div></div>`
    : "";
  if (!rows.length)
    return (
      empty(emptyTitle, emptyDescription, "list", "", true) +
      (data.page > 1 ? bottom : "")
    );
  return `<div class="table-scroll"><table><thead><tr>${columns.map((column) => `<th scope="col">${column}</th>`).join("")}</tr></thead><tbody>${rows.join("")}</tbody></table></div>${bottom}`;
}
function runTable(data, pager = true) {
  const rows = data.items.map(
    (run) =>
      `<tr>${isAdmin ? `<td><strong>${escapeHTML(run.username)}</strong></td>` : ""}<td><strong>${escapeHTML(run.nickname || "微博用户")}</strong><span class="secondary-text mono">${escapeHTML(run.uid)}</span></td><td class="mono">${formatTime(run.started_at)}</td><td>${badge(run.status)}</td><td><span class="mono">${run.done_before} / ${run.success} / ${run.failed}</span><span class="secondary-text">已签 / 新签 / 失败 · 共 ${run.total}</span></td><td>${run.trigger === "scheduled" ? "定时" : "手动"}</td>${pager ? `<td class="wrap muted">${escapeHTML(run.message)}</td>` : ""}<td>${creditForm({ kind: "run-topics", runId: run.id })}</td></tr>`,
  );
  return table(
    [
      ...(isAdmin ? ["平台用户"] : []),
      "微博账号",
      "执行时间",
      "结果",
      "超话数量",
      "触发",
      ...(pager ? ["说明"] : []),
      "超话明细",
    ],
    rows,
    data,
    {
      pager,
      emptyTitle: "还没有签到记录",
      emptyDescription: isAdmin
        ? "用户的签到任务执行后，会在这里汇总。"
        : "绑定微博后，可以手动签到或开启每日计划。",
    },
  );
}
function flatTable(
  columns,
  rows,
  {
    emptyTitle = "暂无记录",
    emptyDescription = "记录产生后会显示在这里。",
    label = "数据明细",
    tableClass = "admin-flat-table",
  } = {},
) {
  if (!rows.length) return empty(emptyTitle, emptyDescription, "list", "", true);
  const head = columns
    .map((column) =>
      typeof column === "string"
        ? `<th scope="col">${column}</th>`
        : `<th scope="col"${column.className ? ` class="${column.className}"` : ""}>${column.label}</th>`,
    )
    .join("");
  return `<div class="run-table-frame"><div class="table-scroll"><table class="${tableClass}" aria-label="${escapeHTML(label)}"><thead><tr>${head}</tr></thead><tbody>${rows.join("")}</tbody></table></div></div>`;
}
function personalRunTable(data, { admin = false } = {}) {
  const columns = [
    ...(admin ? [{ label: "平台用户", className: "col-user" }] : []),
    { label: "微博账号", className: "col-account" },
    { label: "执行时间", className: "col-time" },
    { label: "结果", className: "col-status" },
    { label: "已签 / 新签 / 失败", className: "col-counts" },
    { label: "触发方式", className: "col-trigger" },
    { label: "说明", className: "col-note" },
    { label: "操作", className: "col-actions" },
  ];
  const rows = data.items.map((run, index) => {
    const account = escapeHTML(run.nickname || "微博用户");
    const time = formatTime(run.started_at, true);
    return `<tr>${admin ? `<td class="col-user"><strong>${escapeHTML(run.username || "—")}</strong></td>` : ""}<td class="col-account"><strong class="run-account-name" title="${account}">${account}</strong><span class="secondary-text mono">${escapeHTML(run.uid)}</span></td><td class="col-time run-time mono">${time}</td><td class="col-status">${badge(run.status)}</td><td class="col-counts mono">${run.done_before} / ${run.success} / ${run.failed}</td><td class="col-trigger">${run.trigger === "scheduled" ? "定时" : "手动"}</td><td class="col-note run-note"><span title="${escapeHTML(run.message)}">${escapeHTML(run.message || "—")}</span></td><td class="col-actions"><button type="button" class="button ghost small run-detail-button" data-run-index="${index}" aria-haspopup="dialog" aria-label="查看详情：${account} ${time}">${icon("list")}<span>详情</span></button></td></tr>`;
  });
  return flatTable(columns, rows, {
    emptyTitle: "没有符合条件的签到记录",
    emptyDescription: "试试调整日期、微博账号或执行结果。",
    label: "签到执行明细",
    tableClass: `personal-run-table${admin ? " is-admin" : ""}`,
  });
}
function runPager(data, { label = "记录", unit = "条", refresh = true } = {}) {
  const lastPage = Math.max(1, Math.ceil(data.total / data.page_size));
  return `<div class="run-pager"><span>${data.total} ${unit}${label}</span><nav class="run-page-stepper" aria-label="${label}分页"><button type="button" data-action="previous" aria-label="上一页" ${data.page <= 1 ? "disabled" : ""}>‹</button><span class="mono" aria-label="第 ${data.page} 页，共 ${lastPage} 页">${data.page}/${lastPage}</span><button type="button" data-action="next" aria-label="下一页" ${data.page >= lastPage ? "disabled" : ""}>›</button></nav>${refresh ? `<button type="button" class="button secondary small run-refresh" data-action="refresh" aria-label="刷新${label}" title="刷新${label}">${icon("refresh")}</button>` : ""}</div>`;
}
function runReceipt(run) {
  const row = (label, value) => `<div><dt>${label}</dt><dd>${value}</dd></div>`;
  return `<div class="run-receipt-paper">
    <button type="button" class="button ghost small run-receipt-close" data-close-receipt aria-label="关闭签到详情" autofocus>×</button>
    <header class="run-receipt-header"><h2 id="run-receipt-title">签到详情</h2><p class="mono">${formatTime(run.started_at, true)} · 北京时间</p></header>
    <div class="run-receipt-total"><span>本次新签超话</span><strong>${run.success}</strong></div>
    <dl class="run-receipt-fields">
      ${run.username ? row("平台用户", escapeHTML(run.username)) : ""}
      ${row("微博账号", escapeHTML(run.nickname || "微博用户"))}
      ${row("微博 UID", `<span class="mono">${escapeHTML(run.uid)}</span>`)}
      ${row("执行结果", badge(run.status))}
      ${row("触发方式", run.trigger === "scheduled" ? "定时签到" : "手动签到")}
      ${row("签到汇总", `此前已签 ${run.done_before} · 失败 ${run.failed} · 共 ${run.total}`)}
      ${run.message ? row("说明", escapeHTML(run.message)) : ""}
    </dl>
    <section class="run-receipt-topics" aria-labelledby="run-receipt-topics-title"><h3 id="run-receipt-topics-title">超话明细</h3>${creditForm({ kind: "run-topics", runId: run.id, embedded: true })}</section>
  </div>`;
}
function mountRunReceipt(records, runs) {
  const dialog = $("run-receipt");
  records.addEventListener("click", (event) => {
    const button = event.target.closest("[data-run-index]");
    if (!button || dialog.open) return;
    const run = runs[Number(button.dataset.runIndex)];
    if (!run) return;
    unmountControls(dialog);
    dialog.innerHTML = runReceipt(run);
    dialog.showModal();
    mountControls(dialog);
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target.closest("[data-close-receipt]"))
      dialog.close();
  });
  dialog.addEventListener("close", () => {
    if (dialog.open) return;
    unmountControls(dialog);
    dialog.replaceChildren();
  });
}
function personalRunStats(stats) {
  const tile = (label, value, symbol, tone = "") =>
    `<div class="run-stat-tile"><div>${label}<span class="run-stat-icon ${tone}">${icon(symbol)}</span></div><strong>${escapeHTML(value)}</strong></div>`;
  return tile("范围内执行", stats.runs, "list") +
    tile("成功执行", stats.success, "check", "success") +
    tile("异常执行", stats.partial + stats.failed, "alert", "failed") +
    tile("新签超话", stats.topics_signed, "grid", "signed");
}
function calendarAccounts() {
  return accountsCache.map(({ id, uid, nickname }) => ({ id, uid, nickname }));
}
async function loadWorkspace(sequence) {
  const [accounts, settings, runs] = await Promise.all([
    api("/api/accounts"),
    api("/api/settings"),
    api("/api/runs?page_size=3"),
  ]);
  if (sequence !== renderId) return;
  accountsCache = accounts.accounts;
  planCache = settings.plan;
  workspaceDay = today();
  $("main").innerHTML =
    `<section class="workspace-home">${heading("我的签到", "选好超话，每天自动打卡。", addButton())}<div data-credit-form="footprint" data-props="${escapeHTML(JSON.stringify({ accounts: calendarAccounts() }))}"></div><div class="plan-summary" id="plan-summary">${planSummary(planCache)}</div><div class="workspace-accounts-heading"><h2>我的微博 <span class="badge" id="account-count">${accountsCache.length} 个</span></h2><span class="workspace-date mono">${today().replaceAll("-", ".")}</span></div><div class="card account-list" id="account-list">${accountRows(accountsCache)}</div><div class="workspace-activity"><div class="workspace-activity-heading"><h2>最近动态</h2><a class="account-detail-link" href="#runs">全部记录 ${icon("arrow")}</a></div><div id="recent-activity">${recentActivity(runs)}</div></div>${footer()}</section>`;
  loadTopicSummaries(accountsCache).then(() => {
    if (sequence === renderId && $("account-list"))
      $("account-list").innerHTML = accountRows(accountsCache);
  });
}
async function loadSettings(sequence) {
  const data = await api("/api/settings");
  if (sequence !== renderId) return;
  planCache = data.plan;
  $("main").innerHTML =
    `<section class="client-profile">${heading("我的", "管理每日计划和个人偏好。")}<div class="profile-identity"><div class="avatar">${escapeHTML(user.username.slice(0, 1).toUpperCase())}</div><div><h2>${escapeHTML(user.username)}</h2><p>${user.role === "admin" ? "平台管理员" : "平台用户"}</p></div></div><div class="profile-grid"><div class="card"><div class="card-heading"><h2>每日计划</h2><span id="plan-state" class="badge ${data.plan.enabled ? "valid" : ""}">${data.plan.enabled ? "已开启" : "已暂停"}</span></div><div class="settings-form">${planForm(data.plan)}<details class="plan-guide"><summary>计划如何执行</summary><p>按北京时间对全部绑定微博执行，当天已到时间且尚未成功的账号会补执行。失败间隔 10 分钟自动重试，每日最多 3 次；暂停不影响已开始的任务。</p></details></div></div><div class="profile-preferences"><div class="card"><div class="card-heading"><h2>外观</h2></div><div class="profile-appearance" data-credit-form="appearance"></div></div><div class="card profile-actions">${user.role === "admin" ? `<a href="/admin" class="profile-action">${icon("shield")}管理控制台${icon("arrow")}</a>` : ""}<button class="profile-action" data-action="logout">${icon("logout")}退出登录${icon("arrow")}</button></div></div></div></section>`;
}
function filterForm(type, accounts = []) {
  const active = filters[type] || defaultFilter(type);
  filters[type] = active;
  const statuses =
    type === "logs"
      ? [
          "success",
          "valid",
          "expired",
          "error",
          "failed",
          "partial",
          "network_error",
          "conflict",
          "created",
          "interrupted",
        ]
      : [
          "success",
          "partial",
          "failed",
          "expired",
          "network_error",
          "no_topics",
          "queued",
          "running",
          "interrupted",
        ];
  return creditForm({
    kind: "filters",
    admin: isAdmin,
    values: active,
    statuses: statuses.map((value) => ({ value, label: labels[value] })),
    ...(!isAdmin && accounts.length ? { accounts } : {}),
  });
}
function query(type) {
  const params = new URLSearchParams({ page: pages[type] || 1, page_size: 20 });
  Object.entries(filters[type] || {}).forEach(([key, value]) => {
    if (value) params.set(key, value);
  });
  return params.toString();
}
async function loadRecords(type, sequence) {
  const logMode = type === "logs";
  const personal = !isAdmin && !logMode;
  if (!filters[type]) filters[type] = defaultFilter(type);
  if (personal && !accountsCache.length) {
    try {
      const accountData = await api("/api/accounts");
      if (sequence !== renderId) return;
      accountsCache = accountData.accounts || [];
    } catch (_) {
      /* Continue with UID text filter fallback. */
    }
  }
  const accountOptions = personal
    ? accountsCache.map((account) => ({
        value: account.uid,
        label: `${account.nickname || "微博用户"} · ${account.uid}`,
      }))
    : [];
  $("main").innerHTML = !logMode
    ? `<section class="personal-runs${isAdmin ? " admin-runs" : ""}">${heading(isAdmin ? "执行记录" : "签到记录", isAdmin ? "按平台用户、微博 UID、日期和结果定位每一次执行。" : "")}<section aria-label="签到统计"><h2>数据概览</h2><div class="run-stats" id="range-stats" aria-live="polite"></div></section><section class="run-records" aria-labelledby="run-records-title"><h2 id="run-records-title">执行明细</h2><div class="run-toolbar">${filterForm(type, accountOptions)}<div id="run-pager"></div></div><div id="records-table"><div class="loading-line">正在加载记录…</div></div></section><dialog class="run-receipt" id="run-receipt" aria-labelledby="run-receipt-title"></dialog>${footer()}</section>`
    : `<section class="personal-runs admin-logs">${heading("运行日志", "追踪认证、绑定、计划与任务事件。")}<section class="run-records" aria-labelledby="run-records-title"><h2 id="run-records-title">事件明细</h2><div class="run-toolbar">${filterForm(type)}<div id="run-pager"></div></div><div id="records-table"><div class="loading-line">正在加载日志…</div></div></section>${footer()}</section>`;
  const params = query(type);
  const prefix = `/api/${isAdmin ? "admin/" : ""}`;
  const [data, stats] = await Promise.all([
    api(`${prefix}${type}?${params}`),
    logMode
      ? Promise.resolve(null)
      : api(
          `${prefix}stats?${params}${!filters[type].start && !filters[type].end ? "&all_time=true" : ""}`,
        ),
  ]);
  if (sequence !== renderId) return;
  if (!logMode) {
    const records = $("records-table");
    $("range-stats").innerHTML = personalRunStats(stats);
    $("run-pager").innerHTML = runPager(data, { label: "记录" });
    records.innerHTML = personalRunTable(data, { admin: isAdmin });
    mountRunReceipt(records, data.items);
    return;
  }
  $("run-pager").innerHTML = runPager(data, { label: "日志" });
  $("records-table").innerHTML = flatTable(
    ["时间", "平台用户", "微博", "事件", "状态", "说明"],
    data.items.map(
      (log) =>
        `<tr><td class="mono">${formatTime(log.ts, true)}</td><td><strong>${escapeHTML(log.username || "系统")}</strong></td><td><strong>${escapeHTML(log.nickname || "—")}</strong><span class="secondary-text mono">${escapeHTML(log.uid || "")}</span></td><td>${escapeHTML(kinds[log.kind] || log.kind)}</td><td>${badge(log.status)}</td><td class="wrap muted">${escapeHTML(log.message || "—")}</td></tr>`,
    ),
    {
      emptyTitle: "没有符合条件的日志",
      emptyDescription: "试试调整日期、用户名或事件状态。",
      label: "运行日志明细",
    },
  );
}
async function loadUsers(sequence) {
  const search = filters.users?.search || "";
  $("main").innerHTML =
    `<section class="personal-runs admin-users">${heading("用户列表", "创建平台用户，查看微博绑定数量和计划状态。")}<section class="run-records" aria-labelledby="users-table-title"><div class="overview-section-head"><h2 id="users-table-title">平台用户</h2><div id="run-pager"></div></div><div class="users-toolbar-host">${creditForm({ kind: "users", search })}</div><div id="records-table"><div class="loading-line">正在加载用户…</div></div></section>${footer()}</section>`;
  const data = await api(
    `/api/admin/users?page=${pages.users || 1}&search=${encodeURIComponent(search)}`,
  );
  if (sequence !== renderId) return;
  $("run-pager").innerHTML = runPager(data, { label: "用户", unit: "位" });
  $("records-table").innerHTML = flatTable(
    ["平台用户", "角色", "绑定微博", "每日计划", "注册时间", "操作"],
    data.items.map(
      (item) =>
        `<tr><td><strong>${escapeHTML(item.username)}</strong></td><td>${item.role === "admin" ? "管理员" : "普通用户"}</td><td class="mono">${item.accounts} 个</td><td>${item.enabled ? `<span class="badge valid">${escapeHTML(item.time)} · 已开启</span>` : '<span class="badge">已暂停</span>'}</td><td class="mono">${formatTime(item.created_at, true)}</td><td><button type="button" class="button small ghost" data-action="user-runs" data-name="${escapeHTML(item.username)}">执行记录 →</button></td></tr>`,
    ),
    {
      emptyTitle: "没有匹配的用户",
      emptyDescription: "试试其他用户名关键词。",
      label: "平台用户列表",
    },
  );
}
async function loadSystemSettings(sequence) {
  const [data, maibot] = await Promise.all([
    api("/api/admin/settings"),
    api("/api/admin/maibot"),
  ]);
  if (sequence !== renderId) return;
  $("main").innerHTML =
    `<section>${heading("系统设置", "管理平台的账号注册方式与麦麦机器人集成。")}<div class="settings-grid"><div class="card"><div class="card-heading"><h2>用户注册</h2></div><div class="settings-form">${creditForm({ kind: "system-settings", settings: data.settings })}</div></div><div class="card"><div class="card-heading"><div><h2>麦麦集成</h2><p>在管理端控制只读密钥与允许查询、推送提醒的微博账号</p></div></div><div class="settings-form">${creditForm({ kind: "maibot-settings", config: maibot.config, accounts: maibot.accounts })}</div></div></div>${footer()}</section>`;
}
function anomalyTable(items, { actions = true } = {}) {
  const columns = [
    "平台用户",
    "微博账号",
    "登录状态",
    "最近执行",
    "异常说明",
    ...(actions ? ["快捷定位"] : []),
  ];
  return flatTable(
    columns,
    items.map((item) => {
      const uid = escapeHTML(item.uid);
      const reason =
        item.login_status === "expired"
          ? "等待用户重新扫码登录"
          : item.login_status === "error"
            ? "检测异常，等待接口恢复或重新检测"
            : item.message || "待处理";
      return `<tr><td><strong>${escapeHTML(item.username)}</strong></td><td><strong>${escapeHTML(item.nickname || "微博用户")}</strong><span class="secondary-text mono">${uid}</span></td><td>${badge(item.login_status)}</td><td>${item.run_status ? badge(item.run_status) : "—"}</td><td class="wrap muted">${escapeHTML(reason)}</td>${actions ? `<td><div class="anomaly-actions"><button type="button" class="button ghost small" data-action="uid-runs" data-uid="${uid}">执行记录</button><button type="button" class="button ghost small" data-action="uid-logs" data-uid="${uid}">运行日志</button></div></td>` : ""}</tr>`;
    }),
    {
      emptyTitle: "当前没有异常账号",
      emptyDescription: "登录异常或最近签到未完成的账号会在这里显示。",
      label: "异常账号列表",
    },
  );
}
async function loadOverview(sequence) {
  const [stats, anomalies, runs] = await Promise.all([
    api("/api/admin/stats"),
    api("/api/admin/anomalies?page_size=5"),
    api(`/api/admin/runs?page_size=5&start=${today()}&end=${today()}`),
  ]);
  if (sequence !== renderId) return;
  const alertCount = stats.expired + stats.errors;
  $("main").innerHTML =
    `<section class="admin-overview">${heading("监控概览", "今日执行情况与当前账号异常。", refreshButton())}<div class="stats">${stat("平台用户", stats.users, "当前平台注册用户", "users", { href: "#users" })}${stat("绑定微博", stats.accounts, "全平台微博账号", "grid", { href: "#users" })}${stat("今日执行", stats.runs, `${stats.success} 次成功 · ${stats.partial + stats.failed} 次异常`, "check", { href: "#runs" })}${stat("登录待处理", alertCount, `${stats.expired} 个失效 · ${stats.errors} 个检测异常`, "alert", { href: "#anomalies", tone: alertCount > 0 ? "alert" : "" })}</div><div class="notice">${icon("clock")}今日新签 ${stats.topics_signed} 个超话，失败 ${stats.topics_failed} 个；${stats.active} 个账号任务正在等待或执行。</div><section class="overview-section"><div class="overview-section-head"><div><h2>需要关注</h2><p>当前登录异常，或最近一次签到未完成的账号</p></div><a class="button ghost small" href="#anomalies">全部异常 →</a></div>${anomalyTable(anomalies.items)}</section><section class="overview-section"><div class="overview-section-head"><h2>今日最近执行</h2><a class="button ghost small" href="#runs">全部记录 →</a></div><div id="overview-runs">${personalRunTable(runs, { admin: true })}</div></section><dialog class="run-receipt" id="run-receipt" aria-labelledby="run-receipt-title"></dialog>${footer()}</section>`;
  mountRunReceipt($("overview-runs"), runs.items);
}
async function loadAnomalies(sequence) {
  const kind = filters.anomalies?.kind || "";
  const data = await api(
    `/api/admin/anomalies?page=${pages.anomalies || 1}${kind ? `&kind=${encodeURIComponent(kind)}` : ""}`,
  );
  if (sequence !== renderId) return;
  const counts = data.counts || {
    all: data.total,
    expired: 0,
    error: 0,
    run_failed: 0,
  };
  const tabs = [
    ["", "全部", counts.all ?? data.total],
    ["expired", "登录失效", counts.expired ?? 0],
    ["error", "检测异常", counts.error ?? 0],
    ["run_failed", "执行异常", counts.run_failed ?? 0],
  ];
  const pills = tabs
    .map(
      ([value, label, count]) =>
        `<button type="button" class="anomaly-pill" data-action="anomaly-kind" data-kind="${value}" aria-pressed="${kind === value}"><span>${label}</span><span class="mono">${count}</span></button>`,
    )
    .join("");
  $("main").innerHTML =
    `<section class="personal-runs admin-anomalies">${heading("异常监控", "当前状态快照，不受执行记录的日期筛选影响。")}<section class="run-records" aria-labelledby="anomalies-title"><h2 id="anomalies-title" class="sr-only">待关注账号</h2><div class="run-toolbar"><div class="anomaly-filters" role="group" aria-label="异常类型筛选">${pills}</div><div id="run-pager">${runPager(data, { label: "异常", unit: "个" })}</div></div>${anomalyTable(data.items)}</section>${footer()}</section>`;
}
async function render() {
  const nav = isAdmin ? adminNav : userNav;
  view = nav.some(([id]) => id === location.hash.slice(1))
    ? location.hash.slice(1)
    : nav[0][0];
  const sequence = ++renderId;
  document.body.classList.remove("nav-open");
  updateSidebarToggle();
  document.querySelectorAll("[data-view]").forEach((link) => {
    link.classList.toggle("active", link.dataset.view === view);
    if (link.dataset.view === view) link.setAttribute("aria-current", "page");
    else link.removeAttribute("aria-current");
  });
  if ($("breadcrumb"))
    $("breadcrumb").textContent = nav.find(([id]) => id === view)[1];
  unmountControls($("main"));
  $("main").innerHTML =
    '<div class="loading-line" role="status">正在加载…</div>';
  try {
    if (view === "home") await loadWorkspace(sequence);
    else if (view === "settings") await loadSettings(sequence);
    else if (view === "users") await loadUsers(sequence);
    else if (view === "system-settings") await loadSystemSettings(sequence);
    else if (view === "overview") await loadOverview(sequence);
    else if (view === "anomalies") await loadAnomalies(sequence);
    else await loadRecords(view, sequence);
    if (sequence === renderId) mountControls($("main"));
  } catch (error) {
    if (sequence === renderId)
      $("main").innerHTML =
        heading("暂时无法加载", "请检查网络后重试。") + errorBox(error.message);
  }
}
async function refreshLive() {
  if (view !== "home" || refreshPending || document.hidden) return;
  refreshPending = true;
  try {
    const [accounts, runs] = await Promise.all([
      api("/api/accounts"),
      api("/api/runs?page_size=3"),
    ]);
    if (view !== "home" || !$("account-list")) return;
    accountsCache = accounts.accounts;
    workspaceDay = today();
    $("account-list").innerHTML = accountRows(accountsCache);
    if ($("account-count"))
      $("account-count").textContent = `${accountsCache.length} 个`;
    $("recent-activity").innerHTML = recentActivity(runs);
    document.dispatchEvent(
      new CustomEvent("credit:calendar-refresh", {
        detail: { accounts: calendarAccounts() },
      }),
    );
    await loadTopicSummaries(accountsCache);
    if (view === "home" && $("account-list"))
      $("account-list").innerHTML = accountRows(accountsCache);
  } catch (error) {
    toast(error.message);
  } finally {
    refreshPending = false;
  }
}

async function startQR() {
  const generation = ++qrGeneration;
  clearTimeout(qrTimer);
  qrId = null;
  const dialog = $("qr-dialog");
  if (!dialog.open) dialog.showModal();
  $("qr-body").textContent = "正在连接微博…";
  $("qr-status").textContent = "正在获取二维码";
  $("qr-retry").hidden = true;
  try {
    const qr = await api("/api/login/qrcode", "POST", {});
    if (!dialog.open || generation !== qrGeneration) return;
    qrId = qr.id;
    const image = document.createElement("img");
    image.alt = "微博登录二维码";
    image.src = "data:image/png;base64," + qr.image;
    $("qr-body").replaceChildren(image);
    $("qr-status").textContent = "请在 3 分钟内扫码";
    qrTimer = setTimeout(pollQR, 2500);
  } catch (error) {
    if (!dialog.open || generation !== qrGeneration) return;
    $("qr-body").textContent = error.message;
    $("qr-status").textContent = "获取失败";
    $("qr-retry").hidden = false;
  }
}
async function pollQR() {
  if (!$("qr-dialog").open || !qrId) return;
  const generation = qrGeneration;
  try {
    const result = await api(
      `/api/login/qrcode/${encodeURIComponent(qrId)}/poll`,
      "POST",
      {},
    );
    if (!$("qr-dialog").open || generation !== qrGeneration) return;
    if (result.status === "confirmed") {
      $("qr-dialog").close();
      topicSummaries.clear();
      toast("微博绑定成功");
      if (view === "home") await refreshLive();
      else await render();
      return;
    }
    if (["expired", "blocked"].includes(result.status)) {
      $("qr-body").textContent =
        result.status === "expired"
          ? "二维码已过期"
          : "微博要求额外验证，请先在微博 App 完成验证后重新扫码";
      $("qr-status").textContent = "请重新获取二维码";
      $("qr-retry").hidden = false;
      return;
    }
    $("qr-status").textContent =
      result.status === "scanned"
        ? "已扫码，请在手机上确认"
        : "等待微博 App 扫码";
    qrTimer = setTimeout(pollQR, 2500);
  } catch (error) {
    if ($("qr-dialog").open && generation === qrGeneration) {
      $("qr-body").textContent = error.message;
      $("qr-status").textContent = "验证未完成";
      $("qr-retry").hidden = false;
    }
  }
}
$("qr-close").addEventListener("click", () => $("qr-dialog").close());
$("qr-dialog").addEventListener("close", () => {
  ++qrGeneration;
  clearTimeout(qrTimer);
  qrId = null;
});
$("qr-retry").addEventListener("click", startQR);
function applyTheme(dark) {
  document.documentElement.classList.toggle("dark", dark);
  try {
    localStorage.setItem("weibo-theme", dark ? "dark" : "light");
  } catch (_) {
    /* Keep the visible preference. */
  }
  syncThemeButtons();
  document.dispatchEvent(
    new CustomEvent("credit:theme-changed", { detail: { dark } }),
  );
}
function closeAccountMenus(except = null) {
  document.querySelectorAll("details.account-more[open]").forEach((menu) => {
    if (menu !== except) menu.removeAttribute("open");
  });
}
document.addEventListener("click", (event) => {
  const current = event.target.closest("details.account-more");
  closeAccountMenus(current);
});
document.addEventListener("credit:theme", (event) =>
  applyTheme(event.detail.dark),
);
$("app").addEventListener("click", async (event) => {
  const button = event.target.closest("[data-action]");
  if (!button || button.disabled) return;
  if (button.closest("details.account-more")) closeAccountMenus();
  const { action, id, name, uid, kind } = button.dataset;
  if (action === "theme") {
    applyTheme(!document.documentElement.classList.contains("dark"));
    return;
  }
  if (action === "menu") {
    if (mobileNavigation.matches) document.body.classList.toggle("nav-open");
    else {
      document.documentElement.classList.toggle("sidebar-collapsed");
      try {
        localStorage.setItem(
          "weibo-sidebar-collapsed",
          String(
            document.documentElement.classList.contains("sidebar-collapsed"),
          ),
        );
      } catch (_) {
        /* Keep the current layout when storage is unavailable. */
      }
    }
    updateSidebarToggle();
    return;
  }
  if (action === "account-runs") {
    const account = accountsCache.find((item) => item.id === id);
    if (!account) return;
    filters.runs = { uid: account.uid, start: "", end: "" };
    pages.runs = 1;
    window.scrollTo(0, 0);
    location.hash = "runs";
    return;
  }
  if (action === "topics" || action === "day-details" || action === "plan") {
    const account = accountsCache.find((item) => item.id === id);
    if (action !== "plan" && !account) return;
    if (action === "day-details" && !button.dataset.date) return;
    document.dispatchEvent(
      new CustomEvent("credit:account-panel", {
        detail: {
          opener: button,
          panel: action === "plan"
            ? { kind: "plan", plan: planCache }
            : {
                kind: action,
                date: button.dataset.date,
                account: {
                  id: account.id,
                  uid: account.uid,
                  nickname: account.nickname,
                },
              },
        },
      }),
    );
    return;
  }
  if (action === "bind") {
    await startQR();
    return;
  }
  if (action === "refresh") {
    if (!$("main")) location.reload();
    else await render();
    return;
  }
  if (action === "next" || action === "previous") {
    pages[view] = Math.max(
      1,
      (pages[view] || 1) + (action === "next" ? 1 : -1),
    );
    await render();
    return;
  }
  if (action === "clear-filters") {
    filters[view] = defaultFilter(view);
    pages[view] = 1;
    await render();
    return;
  }
  if (action === "anomaly-kind") {
    filters.anomalies = { kind: kind || "" };
    pages.anomalies = 1;
    await render();
    return;
  }
  if (action === "user-runs") {
    filters.runs = { username: name, start: "", end: "" };
    pages.runs = 1;
    if (view === "runs") await render();
    else location.hash = "runs";
    return;
  }
  if (action === "uid-runs" || action === "uid-logs") {
    const target = action === "uid-logs" ? "logs" : "runs";
    filters[target] = { uid, start: "", end: "" };
    pages[target] = 1;
    if (view === target) await render();
    else location.hash = target;
    return;
  }
  button.disabled = true;
  try {
    if (action === "logout") {
      await api("/api/auth/logout", "POST", {});
      location.assign("/login");
    }
    if (action === "check") {
      const result = await api(
        `/api/accounts/${encodeURIComponent(id)}/check`,
        "POST",
        {},
      );
      toast(result.message);
      await refreshLive();
    }
    if (action === "checkin") {
      await api(`/api/accounts/${encodeURIComponent(id)}/checkin`, "POST", {});
      toast("签到任务已提交");
      await refreshLive();
    }
  } catch (error) {
    toast(error.message);
    if (action === "checkin") await refreshLive();
  } finally {
    button.disabled = false;
  }
});
$("app").addEventListener("credit:filters", async (event) => {
  const type = event.detail.kind === "users" ? "users" : view;
  filters[type] = event.detail.values;
  pages[type] = 1;
  await render();
});
$("app").addEventListener("credit:plan-saved", (event) => {
  const plan = event.detail;
  planCache = plan;
  if ($("plan-summary")) $("plan-summary").innerHTML = planSummary(plan);
  if ($("plan-state")) {
    $("plan-state").textContent = plan.enabled ? "已开启" : "已暂停";
    $("plan-state").className = `badge ${plan.enabled ? "valid" : ""}`;
  }
  toast("签到计划已保存");
});
$("app").addEventListener("credit:user-created", async (event) => {
  filters.users = { search: event.detail.username };
  pages.users = 1;
  toast("用户已创建");
  if (view === "users") await render();
});
document.addEventListener("credit:topics-saved", (event) => {
  const { accountId, selection } = event.detail;
  topicSummaries.set(accountId, {
    ...topicSummaries.get(accountId),
    selection,
  });
  toast("签到范围已保存");
  refreshLive();
});
document.addEventListener("credit:topics-loaded", (event) => {
  const { accountId, ...data } = event.detail;
  topicSummaries.set(accountId, data);
  if (view === "home" && $("account-list"))
    $("account-list").innerHTML = accountRows(accountsCache);
});
window.addEventListener("hashchange", render);
async function initialize() {
  try {
    const result = await api("/api/auth/me");
    user = result.user;
    if (isAdmin && user.role !== "admin") {
      location.assign("/");
      return;
    }
    shell();
    await render();
  } catch (error) {
    $("app").innerHTML =
      `<main class="content">${errorBox(error.message)}<a class="button secondary" href="/login">返回登录</a></main>`;
  }
}
initialize();
function refreshWorkspaceIfNeeded() {
  if (view !== "home" || document.hidden) return;
  const dayChanged = workspaceDay !== today();
  if (dayChanged && $("account-list")) {
    workspaceDay = today();
    $("account-list").innerHTML = accountRows(accountsCache);
  }
  if (dayChanged || accountsCache.some((account) => account.busy))
    refreshLive();
}
setInterval(refreshWorkspaceIfNeeded, 4000);
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) {
    refreshWorkspaceIfNeeded();
    refreshLive();
  }
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeAccountMenus();
  if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
    document.body.classList.remove("nav-open");
    updateSidebarToggle();
    document.querySelector(".sidebar-toggle")?.focus();
  }
});
