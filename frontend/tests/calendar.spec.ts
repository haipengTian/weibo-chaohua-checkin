import { test, expect, type Page } from "@playwright/test";

async function login(page: Page) {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("calendar_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →" }).click();
  await expect(page.getByRole("heading", { name: "我的签到" })).toBeVisible();
}

test("account switching keeps the footprint layout stable while loading and retrying", async ({ page }) => {
  await login(page);
  const footprint = page.getByRole("region", { name: "签到足迹" });
  const selector = footprint.getByRole("combobox", { name: "签到足迹的微博账号" });
  const grid = footprint.getByRole("group", { name: "本月每日签到状态" });
  const tiles = grid.locator("button[data-date]");
  const placeholders = grid.locator(".footprint-day.placeholder");
  const [first, second] = (await (await page.request.get("/api/accounts")).json()).accounts;
  const layout = () => footprint.evaluate((card) => ({
    height: Math.round(card.getBoundingClientRect().height),
    planOffset: Math.round(document.querySelector("#plan-summary")!.getBoundingClientRect().top - card.getBoundingClientRect().top),
  }));
  await expect(tiles.first()).toHaveAttribute("data-id", first.id);
  const dayCount = await tiles.count();

  for (const { width, target, failOnce } of [
    { width: 1280, target: second, failOnce: false },
    { width: 390, target: first, failOnce: true },
  ]) {
    await page.setViewportSize({ width, height: 844 });
    await page.evaluate(() => document.fonts.ready.then(() => undefined));
    const before = await layout();
    await selector.click();
    const option = page.getByRole("option", { name: target.nickname, exact: false });
    await expect(option).toBeVisible();
    let release!: () => void;
    const gate = new Promise<void>((resolve) => { release = resolve; });
    await page.route(
      (url) => url.pathname === "/api/calendar" && url.searchParams.get("account_id") === target.id,
      async (route) => {
        await gate;
        if (failOnce) {
          await route.fulfill({ status: 503, json: { detail: "签到足迹暂时不可用" } });
        } else {
          await route.continue();
        }
      },
      { times: 1 },
    );
    try {
      await option.click();
      await expect(grid).toHaveAttribute("aria-busy", "true");
      await expect(footprint.getByTestId("footprint-success-days")).toHaveText("—");
      await expect(footprint.getByTestId("footprint-streak")).toHaveText("—");
      await expect(tiles).toHaveCount(0);
      await expect(placeholders).toHaveCount(dayCount);
      expect(await layout()).toEqual(before);
    } finally {
      release();
    }
    if (failOnce) {
      await expect(footprint.getByRole("alert")).toContainText("签到足迹暂时不可用");
      await expect(placeholders).toHaveCount(dayCount);
      expect(await layout()).toEqual(before);
      await footprint.getByRole("button", { name: "重试", exact: true }).click();
    }
    await expect(tiles.first()).toHaveAttribute("data-id", target.id);
    await expect(footprint.getByRole("alert")).toHaveCount(0);
    await expect(placeholders).toHaveCount(0);
    expect(await layout()).toEqual(before);
  }
});

test("footprint aligns account and time range and opens daily details across both heatmaps", async ({ page }) => {
  await login(page);
  const footprint = page.getByRole("region", { name: "签到足迹" });
  const toolbar = footprint.locator(".footprint-toolbar");
  const selector = toolbar.getByRole("combobox", { name: "签到足迹的微博账号" });
  const tabs = toolbar.getByRole("tablist", { name: "签到足迹时间范围" });
  await expect(tabs.getByRole("tab", { name: "本月" })).toHaveAttribute("aria-selected", "true");
  await expect(tabs.getByRole("tab", { name: "全部", exact: true })).toHaveCount(0);
  const accountId = await footprint.locator("button[data-date]").first().getAttribute("data-id");

  const monthCalendar = footprint.getByRole("group", { name: "本月每日签到状态" });
  const metrics = footprint.locator(".footprint-metrics");
  for (const width of [1280, 390, 320]) {
    await page.setViewportSize({ width, height: 900 });
    const [accountBox, tabsBox, rowBox] = await Promise.all([selector.boundingBox(), tabs.boundingBox(), toolbar.boundingBox()]);
    const accountCenter = accountBox!.y + accountBox!.height / 2;
    const tabsCenter = tabsBox!.y + tabsBox!.height / 2;
    expect(Math.abs(accountCenter - tabsCenter)).toBeLessThanOrEqual(1);
    expect(accountBox!.x + accountBox!.width).toBeLessThan(tabsBox!.x);
    expect(Math.abs(tabsBox!.x + tabsBox!.width - rowBox!.x - rowBox!.width)).toBeLessThanOrEqual(1);
    const [calendarBox, metricsBox] = await Promise.all([monthCalendar.boundingBox(), metrics.boundingBox()]);
    expect(Math.abs(calendarBox!.x + calendarBox!.width - tabsBox!.x - tabsBox!.width)).toBeLessThanOrEqual(1);
    if (width === 1280) {
      expect(metricsBox!.x + metricsBox!.width).toBeLessThan(calendarBox!.x);
      expect(metricsBox!.x).toBeCloseTo(accountBox!.x, 0);
    } else {
      expect(metricsBox!.y + metricsBox!.height).toBeLessThan(calendarBox!.y);
    }
    if (width !== 320) {
      const counts = metrics.locator(".footprint-count");
      await expect(counts).toHaveCount(2);
      await expect.poll(() => counts.evaluateAll((items) =>
        items.every((item) => item.firstElementChild?.textContent === item.lastElementChild?.textContent),
      )).toBe(true);
      await footprint.screenshot({
        path: `../.preview/artifacts/footprint-month-${width === 1280 ? "desktop" : "mobile"}.png`,
        animations: "disabled",
      });
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  }

  await page.setViewportSize({ width: 390, height: 900 });
  for (const [label, length] of [["近一年", 365], ["近两年", 730]] as const) {
    await tabs.getByRole("tab", { name: label }).click();
    const calendar = footprint.getByRole("region", { name: new RegExp(label + "每日签到状态") });
    const days = calendar.locator("button[data-date]");
    await expect(days).toHaveCount(length);
    await expect(days.first()).toHaveAttribute("data-id", accountId!);
    const latest = calendar.locator('button[aria-current="date"]');
    await expect(latest).toBeInViewport();
    expect(await calendar.evaluate((el) => el.scrollWidth > el.clientWidth)).toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
    if (length === 730) {
      await footprint.screenshot({ path: "../.preview/artifacts/footprint-two-years-mobile.png" });
      const earliest = days.first();
      const date = (await earliest.getAttribute("data-date"))!;
      const request = page.waitForRequest((req) => {
        const url = new URL(req.url());
        return url.pathname === "/api/runs" && url.searchParams.get("start") === date;
      });
      await earliest.click();
      expect(new URL((await request).url()).searchParams.get("end")).toBe(date);
      const details = page.getByRole("dialog", { name: "签到详情" });
      await expect(details.getByRole("region", { name: "当日签到明细" })).toBeVisible();
      await details.getByRole("button", { name: "关闭弹窗" }).click();
      await expect(earliest).toBeFocused();
      await page.setViewportSize({ width: 1280, height: 900 });
      await footprint.screenshot({ path: "../.preview/artifacts/footprint-two-years-desktop.png" });
    }
  }
  await tabs.getByRole("tab", { name: "本月" }).click();
  await expect(footprint.getByText("本月已签", { exact: true })).toBeVisible();
});

test("footprint numbers count up once and respect reduced motion", async ({ page }) => {
  const start = new Date();
  await page.clock.install({ time: start });
  await page.clock.pauseAt(new Date(start.getTime() + 1000));
  await page.route((url) => url.pathname === "/api/calendar", async (route) => {
    const response = await route.fetch();
    const data = await response.json();
    await route.fulfill({ response, json: { ...data, summary: { success_days: 17, streak: 8 } } });
  });
  await login(page);
  const footprint = page.getByRole("region", { name: "签到足迹" });
  const signed = footprint.getByTestId("footprint-success-days").locator(".footprint-count-display");
  const streak = footprint.getByTestId("footprint-streak").locator(".footprint-count-display");
  await expect(signed).toHaveText("0");
  await expect(streak).toHaveText("0");
  await page.clock.runFor(100);
  const counting = Number(await signed.innerText());
  expect(counting).toBeGreaterThan(0);
  expect(counting).toBeLessThan(17);
  await page.clock.runFor(500);
  await expect(signed).toHaveText("17");
  await expect(streak).toHaveText("8");

  const refresh = page.waitForResponse((response) => new URL(response.url()).pathname === "/api/calendar");
  await page.evaluate(() => document.dispatchEvent(new CustomEvent("credit:calendar-refresh")));
  await refresh;
  await expect(signed).toHaveText("17");

  await page.emulateMedia({ reducedMotion: "reduce" });
  await footprint.getByRole("tab", { name: "近一年" }).click();
  await expect(signed).toHaveText("17");
  await expect(streak).toHaveText("8");
});

test("homepage footprint opens only the selected day's details", async ({ page }) => {
  await login(page);
  const footprint = page.getByRole("region", { name: "签到足迹" });
  const [first, second] = (await (await page.request.get("/api/accounts")).json()).accounts;
  const verifyMonth = async (id: string) => {
    const response = await page.request.get("/api/calendar", { params: { account_id: id } });
    expect(response.ok()).toBeTruthy();
    const month = await response.json();
    await expect(footprint.getByTestId("footprint-success-days").locator(".footprint-count-display")).toHaveText(String(month.summary.success_days));
    await expect(footprint.getByTestId("footprint-streak").locator(".footprint-count-display")).toHaveText(String(month.summary.streak));
    await expect(footprint.locator("button[data-date]").first()).toHaveAttribute("data-id", id);
  };
  await verifyMonth(first.id);
  await footprint.getByRole("combobox", { name: "签到足迹的微博账号" }).click();
  await page.getByRole("option", { name: second.nickname, exact: false }).click();
  await verifyMonth(second.id);

  const tile = footprint.locator('button[data-date]:enabled:not([aria-current="date"])').last();
  const date = (await tile.getAttribute("data-date"))!;
  const dayRuns = (url: URL) => url.pathname === "/api/runs" && url.searchParams.has("account_id");
  const fixtureRuns = Array.from({ length: 2 }, (_, i) => ({
    id: `day-run-${i}`,
    started_at: Date.parse(`${date}T08:30:00+08:00`) / 1000 - i * 60,
    status: i === 0 ? "partial" : "success",
    trigger: "scheduled",
    success: i === 0 ? 1 : 2,
    failed: i === 0 ? 1 : 0,
    done_before: 0,
    total: 2,
    message: i === 0 ? "1 个超话未完成" : "",
  }));
  await page.route(dayRuns, async (route) => {
    const params = new URL(route.request().url()).searchParams;
    expect(params.get("account_id")).toBe(second.id);
    expect(params.get("start")).toBe(date);
    expect(params.get("end")).toBe(date);
    expect(params.get("page_size")).toBe("1");
    const pageNumber = Number(params.get("page"));
    await route.fulfill({
      json: { items: fixtureRuns.slice(pageNumber - 1, pageNumber), total: fixtureRuns.length },
    });
  });
  await page.route("**/api/runs/day-run-0/topics", (route) => route.fulfill({
    json: {
      status: "partial",
      items: [
        { id: "topic-success", name: "已成功的超话", status: "success" },
        { id: "topic-failed", name: "未成功的超话", status: "failed" },
      ],
    },
  }));

  await tile.click();
  const dialog = page.getByRole("dialog", { name: "签到详情" });
  const details = dialog.getByRole("region", { name: "当日签到明细" });
  const total = details.locator(".run-receipt-total strong");
  const time = details.locator(".run-receipt-header p");
  const pager = details.getByRole("navigation", { name: "当日执行记录" });
  const close = dialog.getByRole("button", { name: "关闭弹窗", exact: true });
  await expect(dialog).toContainText(second.nickname);
  await expect(time).toContainText(`${date.replaceAll("-", "/")} 08:30`);
  await expect(pager).toContainText("第 1 条 · 共 2 条");
  await expect(total).toHaveText("1");
  await expect(details.locator(".run-receipt-header")).toHaveCSS("border-bottom-style", "dashed");
  await expect(details.locator(".run-receipt-fields")).toHaveCSS("border-top-style", "dashed");
  await expect(details.getByText("1 个超话未完成")).toBeVisible();
  await expect(details.getByText(/^(未成功|已成功)的超话$/)).toHaveText(["未成功的超话", "已成功的超话"]);
  await expect(dialog.locator("button[data-date]")).toHaveCount(0);
  await expect(dialog.getByRole("button", { name: /检测登录|重新扫码/ })).toHaveCount(0);
  await page.screenshot({ path: "../.preview/artifacts/checkin-day-desktop.png", animations: "disabled" });
  const next = pager.getByRole("button", { name: "下一条" });
  await next.click();
  await expect(total).toHaveText("2");
  await expect(time).toContainText("08:29");
  await expect(details.getByText("未成功的超话")).toHaveCount(0);
  await expect(next).toBeDisabled();
  await pager.getByRole("button", { name: "上一条" }).click();
  await expect(total).toHaveText("1");
  await close.click();
  await expect(tile).toBeFocused();

  await page.setViewportSize({ width: 390, height: 844 });
  await page.route(dayRuns, (route) => route.fulfill({ json: { items: fixtureRuns.slice(0, 1), total: 1 } }));
  await tile.click();
  await expect(total).toHaveText("1");
  await expect(pager).toHaveCount(0);
  await expect(details.getByText("未成功的超话")).toBeVisible();
  expect(await details.evaluate((node) => node.scrollWidth)).toBeLessThanOrEqual(390);
  await page.screenshot({ path: "../.preview/artifacts/checkin-day-mobile.png", animations: "disabled" });
  await close.click();
  await expect(tile).toBeFocused();

  await page.route(dayRuns, (route) => route.fulfill({ json: { items: [], total: 0 } }));
  await page.route(dayRuns, (route) => route.fulfill({ status: 503, json: { detail: "签到记录暂时不可用" } }), { times: 1 });
  await tile.click();
  await expect(details.getByRole("alert")).toContainText("签到记录暂时不可用");
  await details.getByRole("button", { name: "重试" }).click();
  await expect(details.getByText("当天没有签到记录")).toBeVisible();
});

test("account card opens its history with no date limit", async ({ page }) => {
  await login(page);
  const card = page.locator(".workspace-account").filter({ hasText: "晚风放映室" });
  await expect(card.getByRole("button", { name: "检测登录", exact: true })).toBeVisible();
  await expect(card.getByRole("button", { name: "重新扫码", exact: true })).toBeVisible();
  const [records, stats] = await Promise.all([
    page.waitForRequest((request) => new URL(request.url()).pathname === "/api/runs"),
    page.waitForRequest((request) => new URL(request.url()).pathname === "/api/stats"),
    card.getByRole("button", { name: "签到记录", exact: true }).click(),
  ]);
  for (const request of [records, stats]) {
    const params = new URL(request.url()).searchParams;
    expect(params.get("uid")).toBe("20002");
    expect(params.has("start")).toBe(false);
    expect(params.has("end")).toBe(false);
  }
  expect(new URL(stats.url()).searchParams.get("all_time")).toBe("true");
  await expect(page).toHaveURL(/#runs$/);
  await expect(page.getByRole("heading", { name: "签到记录", exact: true })).toBeVisible();
  await expect(page.getByLabel("微博 UID", { exact: true })).toHaveValue("20002");
  await expect(page.locator("#records-table")).toContainText("晚风放映室");
  await expect(page.locator("#records-table")).not.toContainText("月光收集站");
});
