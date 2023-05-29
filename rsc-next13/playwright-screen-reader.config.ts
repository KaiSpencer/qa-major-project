import { Config, defineConfig, devices } from "@playwright/test";
import { baseConfig } from "./playwright.config";
import { voConfig } from "@guidepup/playwright";

const configNoJs: Config = {
  ...baseConfig,
  ...voConfig,
  reportSlowTests: null,
  timeout: 3 * 60 * 1000,
  retries: 2,
  testMatch: "tests/screen-reader.spec.ts",
  projects: [
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"], headless: true, video: "on" },
    },
  ],
};

export default defineConfig(configNoJs);
