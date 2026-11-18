import { test, expect } from "@playwright/test";

const password = "Test-password-2026!"; // Isolated preview fixture only.

test("administrator creates a user and controls public registration", async ({
  page,
  browser,
  baseURL,
}) => {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("owner");
  await page.getByLabel("密码", { exact: true }).fill(password);
  await page.getByRole("button", { name: "登录平台 →", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "我的签到", exact: true }),
  ).toBeVisible();
  await page.goto("/admin#users");
  await page.getByRole("button", { name: "添加用户", exact: true }).click();
  const username = `managed_${Date.now()}`;
  await page.getByLabel("用户名", { exact: true }).fill(username);
  await page.getByLabel("初始密码", { exact: true }).fill(password);
  await page.getByLabel("确认初始密码", { exact: true }).fill("does-not-match");
  await page.getByRole("button", { name: "创建用户", exact: true }).click();
  await expect(page.getByRole("alert")).toHaveText("两次密码输入不一致");
  await page.getByLabel("确认初始密码", { exact: true }).fill(password);
  await page.getByRole("button", { name: "创建用户", exact: true }).click();
  await expect(page.locator("tbody")).toContainText(username);
  expect((await page.request.get("/api/auth/me")).status()).toBe(200);
  expect(
    (await (await page.request.get("/api/auth/me")).json()).user.username,
  ).toBe("owner");

  const guest = await browser.newContext({ baseURL });
  try {
    await page.getByRole("link", { name: "系统设置", exact: true }).click();
    await page
      .getByRole("switch", { name: "开放用户注册", exact: true })
      .uncheck();
    await page
      .getByRole("button", { name: "保存系统设置", exact: true })
      .click();
    await expect(page.getByRole("status")).toHaveText("已保存：公开注册已关闭");
    await page.reload();
    await expect(
      page.getByRole("switch", { name: "开放用户注册", exact: true }),
    ).not.toBeChecked();
    const login = await guest.newPage();
    await login.goto("/login");
    await expect(
      login.getByRole("tab", { name: "注册", exact: true }),
    ).toHaveCount(0);
    await expect(
      login.getByText("注册已关闭，请联系管理员开通账号。", { exact: true }),
    ).toBeVisible();
    const closed = await guest.request.post("/api/auth/register", {
      headers: { "X-Requested-With": "WeiboPortal" },
      data: { username: `closed_${Date.now()}`, password },
    });
    expect(closed.status()).toBe(403);
    await login.getByLabel("平台用户名", { exact: true }).fill(username);
    await login.getByLabel("密码", { exact: true }).fill(password);
    await login
      .getByRole("button", { name: "登录平台 →", exact: true })
      .click();
    await expect(
      login.getByRole("heading", { name: "我的签到", exact: true }),
    ).toBeVisible();
    expect((await guest.request.get("/api/admin/settings")).status()).toBe(403);
  } finally {
    await page.request.put("/api/admin/settings", {
      headers: { "X-Requested-With": "WeiboPortal" },
      data: { registration_enabled: true },
    });
    await guest.close();
  }
});
