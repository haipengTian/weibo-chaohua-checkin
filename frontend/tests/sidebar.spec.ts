import { test, expect } from "@playwright/test";

test("sidebar rail persists and mobile drawer remains expanded", async ({
  page,
}) => {
  await page.goto("/login");
  await page.getByLabel("平台用户名", { exact: true }).fill("sample_user");
  await page.getByLabel("密码", { exact: true }).fill("Test-password-2026!");
  await page.getByRole("button", { name: "登录平台 →" }).click();
  await page.getByRole("button", { name: "收起侧边栏", exact: true }).click();
  await expect(page.locator("html")).toHaveClass(/sidebar-collapsed/);
  await expect(
    page.getByRole("button", { name: "展开侧边栏", exact: true }),
  ).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("link", { name: "每日计划", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "每日计划", exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(page.locator("html")).toHaveClass(/sidebar-collapsed/);
  await page.setViewportSize({ width: 390, height: 844 });
  await page.getByRole("button", { name: "展开侧边栏", exact: true }).click();
  await expect(page.locator("body")).toHaveClass(/nav-open/);
  await expect(page.locator(".nav-text").first()).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator("body")).not.toHaveClass(/nav-open/);
  await page.setViewportSize({ width: 1440, height: 960 });
  await expect(page.locator("html")).toHaveClass(/sidebar-collapsed/);
  await page.getByRole("button", { name: "展开侧边栏", exact: true }).click();
  await expect(page.locator("html")).not.toHaveClass(/sidebar-collapsed/);
});
