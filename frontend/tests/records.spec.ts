import { test, expect } from "@playwright/test";

const run = {
  id: "run-preview-1",
  nickname: "月光收集站",
  uid: "20001",
  started_at: Date.UTC(2026, 10, 18, 0, 2) / 1000,
  status: "partial",
  trigger: "scheduled",
  done_before: 1,
  success: 1,
  failed: 1,
  total: 3,
  message: "部分超话签到失败，可手动重试。",
};

test("personal records show a responsive table and open a receipt with topic results", async ({ page }, testInfo) => {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("calendar_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →" }).click();
  await expect(page.getByRole("heading", { name: "我的签到" })).toBeVisible();

  await page.route((url) => url.pathname === "/api/runs", (route) => {
    const params = new URL(route.request().url()).searchParams;
    const currentPage = Number(params.get("page"));
    const filtered = !!params.get("uid");
    const runs = currentPage === 1
      ? Array.from({ length: filtered ? 1 : 20 }, (_, i) => ({
          ...run,
          id: `run-preview-${i + 1}`,
          started_at: run.started_at - i * 60,
        }))
      : [{ ...run, id: "run-preview-21", nickname: "晚风放映室" }];
    return route.fulfill({ json: { items: runs, total: filtered ? 1 : 21, page: currentPage, page_size: 20 } });
  });
  await page.route((url) => url.pathname === "/api/stats", (route) => {
    const filtered = !!new URL(route.request().url()).searchParams.get("uid");
    return route.fulfill({ json: { runs: filtered ? 1 : 21, success: filtered ? 0 : 12, partial: filtered ? 1 : 7, failed: filtered ? 0 : 2, topics_signed: filtered ? 1 : 46 } });
  });
  await page.route("**/api/runs/run-preview-1/topics", (route) => route.fulfill({
    json: { status: "partial", items: [
      { name: "天文观测", status: "success" },
      { name: "周末书单", status: "done_before" },
      { name: "城市漫步", status: "failed" },
    ] },
  }));
  await page.goto("/?preview=day-details#runs");
  const table = page.getByRole("table", { name: "签到执行明细" });
  const firstDetails = table.getByRole("button", { name: /^查看详情：月光收集站/ }).first();
  await expect(table.getByRole("row")).toHaveCount(21);
  await page.screenshot({ animations: "disabled", path: testInfo.outputPath("records-desktop.png") });

  const scrollBefore = await page.evaluate(() => window.scrollY);
  await firstDetails.click();
  const receipt = page.getByRole("dialog", { name: "签到详情" });
  await expect(receipt).toBeVisible();
  expect(await page.evaluate(() => window.scrollY)).toBe(scrollBefore);
  await expect(receipt.locator(".run-receipt-total strong")).toHaveText("1");
  await expect(receipt.getByText("此前已签 1 · 失败 1 · 共 3")).toBeVisible();
  await expect(receipt.getByText(run.message)).toBeVisible();
  await expect(receipt.getByRole("listitem").first()).toHaveText("城市漫步签到失败");
  await page.screenshot({ animations: "disabled", path: testInfo.outputPath("receipt-desktop.png") });
  await page.keyboard.press("Escape");
  await expect(receipt).toHaveCount(0);
  await expect(firstDetails).toBeFocused();
  await firstDetails.click();
  await page.mouse.click(10, 10);
  await expect(receipt).toHaveCount(0);

  const next = page.getByRole("button", { name: "下一页", exact: true });
  await next.click();
  await expect(table.getByText("晚风放映室")).toBeVisible();
  await expect(next).toBeDisabled();
  const uid = page.getByLabel("微博 UID", { exact: true });
  await uid.fill("20001");
  await page.getByRole("button", { name: "筛选", exact: true }).click();
  await expect(table.getByRole("row")).toHaveCount(2);
  await expect(page.getByText("1 条记录", { exact: true })).toBeVisible();
  await expect(uid).toHaveValue("20001");

  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 720 });
    expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
    if (width === 390) await page.screenshot({ animations: "disabled", path: testInfo.outputPath("records-mobile.png") });
    await firstDetails.click();
    await expect(receipt.getByText("天文观测")).toBeVisible();
    const box = await receipt.boundingBox();
    expect(box!.width).toBeLessThan(width);
    expect(box!.height).toBeLessThan(720);
    if (width === 390) await page.screenshot({ animations: "disabled", path: testInfo.outputPath("receipt-mobile.png") });
    await receipt.getByRole("button", { name: "关闭签到详情" }).click();
    await expect(firstDetails).toBeFocused();
  }
});
