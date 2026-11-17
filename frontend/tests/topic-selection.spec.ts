import { test, expect } from "@playwright/test";

test("mobile account layout and per-account topic selection", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("sample_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →", exact: true }).click();
  const topics = page.getByRole("region", { name: "关注的超话", exact: true });
  await expect(topics.getByText("音乐分享", { exact: true })).toBeVisible();
  const account = page.locator(".account-row").first();
  const info = await account.locator(".account-body").boundingBox();
  const actions = await account.locator(".account-controls").boundingBox();
  expect(info!.width).toBeGreaterThan(200);
  expect(actions!.y).toBeGreaterThanOrEqual(info!.y + info!.height);

  const accounts = (await (await page.request.get("/api/accounts")).json())
    .accounts;
  const url = `/api/accounts/${accounts[0].id}/topics/selection`;
  try {
    await page.request.put(url, {
      headers: { "X-Requested-With": "WeiboPortal" },
      data: { mode: "all", topic_ids: [] },
    });
    const scanUrl = `**/api/accounts/${accounts[0].id}/topics`;
    await page.route(scanUrl, async (route) => {
      const response = await route.fetch();
      const data = await response.json();
      data.scan.complete = false;
      data.scan.status = "partial";
      await route.fulfill({ response, json: data });
    });
    try {
      await page.reload();
      await expect(
        topics.getByRole("button", { name: "自选超话", exact: true }),
      ).toBeDisabled();
      await expect(
        topics.getByRole("checkbox", { name: "音乐分享", exact: true }),
      ).toBeDisabled();
    } finally {
      await page.unroute(scanUrl);
    }
    await page.reload();
    await topics
      .getByRole("checkbox", { name: "音乐分享", exact: true })
      .uncheck();
    await topics.getByRole("button", { name: "保存", exact: true }).click();
    await expect(topics.getByRole("status")).toHaveText("已保存");
    await page.reload();
    await expect(
      topics.getByRole("checkbox", { name: "音乐分享", exact: true }),
    ).not.toBeChecked();
    await expect(
      topics.getByRole("checkbox", { name: "测试超话", exact: true }),
    ).toBeChecked();
    await topics.getByLabel("搜索超话", { exact: true }).fill("音乐");
    await topics
      .getByRole("checkbox", { name: "全选搜索结果", exact: true })
      .check();
    await topics.getByLabel("搜索超话", { exact: true }).fill("");
    await expect(
      topics.getByRole("checkbox", { name: "测试超话", exact: true }),
    ).toBeChecked();
  } finally {
    await page.request.put(url, {
      headers: { "X-Requested-With": "WeiboPortal" },
      data: { mode: "all", topic_ids: [] },
    });
  }
});
