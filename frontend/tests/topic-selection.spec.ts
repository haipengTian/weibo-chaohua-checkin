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
  const account = page.locator(".workspace-account").first();
  await expect(account).toBeVisible();
  const info = await account.locator(".account-body").boundingBox();
  const actions = await account.locator(".account-row-actions").boundingBox();
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
      await account
        .getByRole("button", { name: "配置签到", exact: true })
        .click();
      await expect(
        topics.getByRole("radio", { name: "只签到选中的超话", exact: true }),
      ).toBeDisabled();
      await expect(
        topics.getByRole("checkbox", { name: "音乐分享", exact: true }),
      ).toHaveCount(0);
    } finally {
      await page.unroute(scanUrl);
    }
    await page.reload();
    await account
      .getByRole("button", { name: "配置签到", exact: true })
      .click();
    await topics
      .getByRole("radio", { name: "只签到选中的超话", exact: true })
      .click();
    await topics
      .getByRole("checkbox", { name: "音乐分享", exact: true })
      .uncheck();
    const dialog = page.getByRole("dialog", { name: "配置签到", exact: true });
    await dialog.getByRole("button", { name: "关闭弹窗" }).click();
    await expect(dialog.getByRole("alert")).toContainText("未保存的修改");
    await dialog.getByRole("button", { name: "继续编辑" }).click();
    await page.screenshot({ path: "../.preview/artifacts/checkin-topics-modal-mobile.png" });
    await topics.getByRole("button", { name: "保存设置", exact: true }).click();
    await expect(
      page.getByRole("dialog", { name: "配置签到", exact: true }),
    ).not.toBeVisible();
    await page.reload();
    await account
      .getByRole("button", { name: "配置签到", exact: true })
      .click();
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
