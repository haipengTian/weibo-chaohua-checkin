import { test, expect, type Page } from "@playwright/test";

const password = "Test-password-2026!"; // Public, isolated preview fixture only.

async function login(page: Page, username = "sample_user") {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill(username);
  await page.getByLabel("密码", { exact: true }).fill(password);
  await page.getByRole("button", { name: "登录平台 →" }).click();
  await expect(page.getByRole("heading", { name: "我的工作台" })).toBeVisible();
}

async function setTime(page: Page, hour: string, minute: string) {
  await page
    .getByRole("button", { name: "每天签到时间 · 北京时间", exact: true })
    .click();
  await page.getByRole("combobox", { name: "小时", exact: true }).click();
  await page.getByRole("option", { name: hour, exact: true }).click();
  await page.getByRole("combobox", { name: "分钟", exact: true }).click();
  await page.getByRole("option", { name: minute, exact: true }).click();
  await page.getByRole("button", { name: "确定时间", exact: true }).click();
}

test("credit time, switch, save persistence, failure and portal cleanup", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (
      message.type() === "error" &&
      message.text().includes("Content Security Policy")
    )
      errors.push(message.text());
  });
  await login(page);
  await page.getByRole("link", { name: "每日计划", exact: true }).click();
  await setTime(page, "07", "45");
  await page.getByRole("switch", { name: "自动签到" }).check();
  const saved = page.waitForResponse(
    (response) =>
      response.url().endsWith("/api/settings") &&
      response.request().method() === "PUT",
  );
  await page.getByRole("button", { name: "保存签到计划" }).click();
  expect((await saved).request().postDataJSON()).toEqual({
    enabled: true,
    time: "07:45",
  });
  await expect(page.getByText("已保存：每天 07:45 自动签到")).toBeVisible();
  await page.reload();
  await expect(page.locator("#plan-time")).toContainText("07:45");
  await expect(page.getByRole("switch", { name: "自动签到" })).toBeChecked();
  await page.locator("#plan-time").click();
  await page.getByRole("combobox", { name: "小时", exact: true }).click();
  await page.getByRole("option", { name: "10", exact: true }).click();
  await page.getByRole("button", { name: "取消", exact: true }).click();
  await expect(page.locator("#plan-time")).toContainText("07:45");
  await page.route("**/api/settings", (route) =>
    route.request().method() === "PUT"
      ? route.fulfill({
          status: 503,
          json: { detail: "暂时无法保存，请稍后重试" },
        })
      : route.continue(),
  );
  await page.getByRole("button", { name: "保存签到计划" }).click();
  await expect(page.getByRole("alert")).toHaveText("暂时无法保存，请稍后重试");
  await expect(
    page.getByRole("button", { name: "保存签到计划" }),
  ).toBeEnabled();
  await page.locator("#plan-time").click();
  await expect(
    page.getByRole("dialog", { name: "签到时间选择器" }),
  ).toBeVisible();
  await page.evaluate(() => {
    location.hash = "runs";
  });
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.locator(
      "input[type=time],input[type=date],select:not([aria-hidden=true])",
    ),
  ).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("record filters use credit select/calendar, retain ISO dates across timezone and reset", async ({
  page,
}) => {
  await login(page, "owner");
  await page.goto("/admin#runs");
  await page.getByLabel("平台用户名", { exact: true }).fill("sample_user");
  await page.getByLabel("微博 UID", { exact: true }).fill("10001");
  await page.getByRole("combobox", { name: "执行结果" }).focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("option", { name: "全部结果", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("ArrowDown");
  await expect(
    page.getByRole("option", { name: "成功", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("combobox", { name: "执行结果" })).toHaveText(
    "成功",
  );
  await page.getByRole("button", { name: "开始日期", exact: true }).click();
  const firstDay = page
    .getByRole("button", { name: /^\d+年\d+月1日$/ })
    .first();
  const date = await firstDay.getAttribute("aria-label");
  const [year, month] = date!.match(/\d+/g)!;
  const expectedDate = `${year}-${month.padStart(2, "0")}-01`;
  await firstDay.click();
  await page.getByRole("button", { name: "结束日期", exact: true }).click();
  await page.getByRole("button", { name: "清除日期", exact: true }).click();
  const response = page.waitForResponse((r) =>
    r.url().includes("/api/admin/runs?"),
  );
  await page.getByRole("button", { name: "筛选", exact: true }).click();
  const params = new URL((await response).url()).searchParams;
  expect(params.get("start")).toBe(expectedDate);
  expect(params.has("end")).toBeFalsy();
  expect(params.get("status")).toBe("success");
  expect(params.get("username")).toBe("sample_user");
  expect(params.get("uid")).toBe("10001");
  await expect(page.locator("[name=start]")).toHaveValue(expectedDate);
  await page.getByRole("button", { name: "重置", exact: true }).click();
  await expect(page.getByLabel("平台用户名", { exact: true })).toHaveValue("");
  await expect(page.getByRole("combobox", { name: "执行结果" })).toHaveText(
    "全部结果",
  );
  await page.getByRole("button", { name: "开始日期", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  await expect(
    page.locator(
      "input[type=date],input[type=time],select:not([aria-hidden=true])",
    ),
  ).toHaveCount(0);
});

test("user search and mobile dark pickers stay within viewport", async ({
  page,
}) => {
  await login(page, "owner");
  await page.goto("/admin#users");
  await page.getByLabel("搜索用户名").fill("sample_user");
  await page.getByRole("button", { name: "搜索", exact: true }).click();
  await expect(page.locator("tbody tr")).toHaveCount(1);
  await expect(page.locator("tbody")).toContainText("sample_user");
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/admin#logs");
  await page.getByRole("button", { name: "切换明暗主题" }).click();
  await page.getByRole("button", { name: "开始日期", exact: true }).click();
  const calendar = page.getByRole("dialog", { name: "开始日期日历" });
  await expect(calendar).toBeVisible();
  const box = (await calendar.boundingBox())!;
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.x + box.width).toBeLessThanOrEqual(390);
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  await page.screenshot({
    path: "../.preview/artifacts/credit-calendar-mobile.png",
    fullPage: true,
  });
  await page.keyboard.press("Escape");
  await page.getByRole("combobox", { name: "执行结果" }).click();
  await expect(page.getByRole("listbox")).toBeVisible();
  await page.keyboard.press("Escape");
  await page.goto("/#settings");
  await page.locator("#plan-time").click();
  const timeBox = (await page
    .getByRole("dialog", { name: "签到时间选择器" })
    .boundingBox())!;
  expect(timeBox.x).toBeGreaterThanOrEqual(0);
  expect(timeBox.x + timeBox.width).toBeLessThanOrEqual(390);
  await page.screenshot({
    path: "../.preview/artifacts/credit-time-mobile.png",
    fullPage: true,
  });
});

test("credit registration validates confirmation and creates a usable session", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByRole("tab", { name: "注册", exact: true }).click();
  await expect(page.locator("[data-slot=input]:visible")).toHaveCount(3);
  await page.getByLabel("平台用户名", { exact: true }).fill(`ui_${Date.now()}`);
  await page.getByLabel("密码", { exact: true }).fill(password);
  await page.getByLabel("确认密码", { exact: true }).fill("different-password");
  await page.getByRole("button", { name: "创建账号", exact: true }).click();
  await expect(page.getByRole("alert")).toHaveText("两次密码输入不一致");
  await page.getByLabel("确认密码", { exact: true }).fill(password);
  await page.getByRole("button", { name: "创建账号", exact: true }).click();
  await expect(page.getByRole("heading", { name: "我的工作台" })).toBeVisible();
});
