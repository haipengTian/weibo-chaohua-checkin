import { test, expect } from "@playwright/test";

test("followed topics show names, filter and refresh without signing", async ({
  page,
}) => {
  const checkins: string[] = [];
  page.on("request", (request) => {
    if (request.url().endsWith("/checkin")) checkins.push(request.url());
  });
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("sample_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →", exact: true }).click();
  const topics = page.getByRole("region", { name: "关注的超话", exact: true });
  await expect(topics.getByText("音乐分享", { exact: true })).toBeVisible();
  await expect(topics.getByText("测试超话", { exact: true })).toBeVisible();
  await topics.getByLabel("搜索超话", { exact: true }).fill("音乐");
  await expect(topics.locator(".topic-list > li")).toHaveCount(1);
  await topics.getByLabel("搜索超话", { exact: true }).fill("");
  const refreshed = page.waitForResponse(
    (response) =>
      response.url().endsWith("/topics/refresh") &&
      response.request().method() === "POST",
  );
  await topics.getByRole("button", { name: "刷新超话", exact: true }).click();
  expect((await refreshed).status()).toBe(200);
  await expect(topics.getByText("测试超话", { exact: true })).toBeVisible();
  expect(checkins).toEqual([]);
});
