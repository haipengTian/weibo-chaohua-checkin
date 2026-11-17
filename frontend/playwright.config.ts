import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  webServer: {
    command: `"${process.env.PREVIEW_PYTHON || "python"}" -m tests.preview_server`,
    cwd: "..",
    url: "http://127.0.0.1:8788/login",
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
  use: {
    baseURL: "http://127.0.0.1:8788",
    viewport: { width: 1440, height: 960 },
    timezoneId: "America/Los_Angeles",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    trace: "retain-on-failure",
  },
});
