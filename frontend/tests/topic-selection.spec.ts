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
    await topics.getByRole("combobox", { name: "签到范围", exact: true }).click();
    await page
      .getByRole("option", { name: "仅选中的超话", exact: true })
      .click();
    await topics
      .getByRole("checkbox", { name: "音乐分享", exact: true })
      .uncheck();
    await topics
      .getByRole("button", { name: "保存签到范围", exact: true })
      .click();
    await expect(topics.getByRole("status")).toHaveText(
      "已保存，手动和定时签到均按此范围执行。",
    );
    await page.reload();
    await expect(
      topics.getByRole("checkbox", { name: "音乐分享", exact: true }),
    ).not.toBeChecked();
    await expect(
      topics.getByRole("checkbox", { name: "测试超话", exact: true }),
    ).toBeChecked();
    await topics.getByLabel("搜索超话", { exact: true }).fill("音乐");
    await topics
      .getByRole("button", { name: "全选当前结果", exact: true })
      .click();
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
