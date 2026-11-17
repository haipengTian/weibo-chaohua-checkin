import { test, expect, type Page } from "@playwright/test";

async function login(page: Page) {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("calendar_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →" }).click();
  await expect(page.getByRole("heading", { name: "我的工作台" })).toBeVisible();
}

test("month calendar switches accounts, opens real details, pages and changes month", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await login(page);
  const calendar = page.getByLabel("签到日历", { exact: true });
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("4天");
  await expect(calendar.getByText("当天共 2 次执行")).toBeVisible();
  await expect(
    calendar.getByLabel("当日签到明细").getByText("成功", { exact: true }),
  ).toHaveCount(2);
  const today = await page.evaluate(() =>
    new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Shanghai",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(new Date()),
  );
  const [year, month, day] = today.split("-").map(Number);
  const yesterday = new Date(year, month - 1, day - 1);
  await calendar
    .getByRole("button", {
      name: `${yesterday.getFullYear()}年${yesterday.getMonth() + 1}月${yesterday.getDate()}日，成功`,
      exact: true,
    })
    .click();
  await expect(calendar.getByText("当天共 1 次执行")).toBeVisible();
  await calendar
    .getByRole("combobox", { name: "微博账号", exact: true })
    .click();
  await page
    .getByRole("option", { name: "晚风放映室 · 20002", exact: true })
    .click();
  await expect(calendar.getByTestId("calendar-success-days")).toHaveText("0天");
  await expect(calendar.getByText("当天没有签到记录")).toBeVisible();
  await calendar
    .getByRole("button", {
      name: `${year}年${month}月${day}日，失败`,
      exact: true,
    })
    .click();
  await expect(calendar.getByText("当天共 6 次执行")).toBeVisible();
  await expect(calendar.locator(".checkin-run-list li")).toHaveCount(5);
  await calendar.getByRole("button", { name: "下一页", exact: true }).click();
  await expect(calendar.locator(".checkin-run-list li")).toHaveCount(1);
  await calendar
    .getByRole("button", { name: "上个月签到日历", exact: true })
    .click();
  await expect(calendar.getByText("当天没有签到记录")).toBeVisible();
  await calendar.getByRole("button", { name: "回到本月", exact: true }).click();
  await expect(calendar.getByText("当天共 6 次执行")).toBeVisible();
  expect(errors).toEqual([]);
});

test("calendar retry, stale account response and mobile dark layout", async ({
  page,
}) => {
  await login(page);
  const calendar = page.getByLabel("签到日历", { exact: true });
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("4天");
  await calendar.scrollIntoViewIfNeeded();
  await page.screenshot({
    path: "../.preview/artifacts/checkin-calendar-desktop.png",
    fullPage: true,
  });
  await page.route(
    "**/api/calendar?**",
    async (route) => {
      await route.fulfill({ status: 503, json: { detail: "日历暂时不可用" } });
    },
    { times: 1 },
  );
  await calendar.getByRole("button", { name: "刷新日历", exact: true }).click();
  await expect(calendar.getByRole("alert")).toContainText("日历暂时不可用");
  await calendar.getByRole("button", { name: "重试", exact: true }).click();
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("4天");
  // A deliberately delayed first-account response must not overwrite the next selection.
  let release: () => void = () => {};
  const gate = new Promise<void>((resolve) => {
    release = resolve;
  });
  let intercepted: () => void = () => {};
  const started = new Promise<void>((resolve) => {
    intercepted = resolve;
  });
  await page.route(
    "**/api/calendar?**",
    async (route) => {
      const response = await route.fetch();
      intercepted();
      await gate;
      await route.fulfill({ response }).catch(() => {});
    },
    { times: 1 },
  );
  await calendar.getByRole("button", { name: "刷新日历", exact: true }).click();
  await started;
  await calendar
    .getByRole("combobox", { name: "微博账号", exact: true })
    .click();
  await page
    .getByRole("option", { name: "晚风放映室 · 20002", exact: true })
    .click();
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("0天");
  release();
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("0天");
  await calendar
    .getByRole("combobox", { name: "微博账号", exact: true })
    .click();
  await page
    .getByRole("option", { name: "月光收集站 · 20001", exact: true })
    .click();
  await expect(calendar.getByTestId("calendar-streak")).toHaveText("4天");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "切换明暗主题" }).click();
  await calendar.scrollIntoViewIfNeeded();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  const gridBox = (await calendar
    .locator(".checkin-month-grid")
    .boundingBox())!;
  expect(gridBox.x).toBeGreaterThanOrEqual(0);
  expect(gridBox.x + gridBox.width).toBeLessThanOrEqual(390);
  await page.screenshot({
    path: "../.preview/artifacts/checkin-calendar-mobile.png",
    fullPage: true,
  });
});
