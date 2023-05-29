import { Config, defineConfig, devices } from "@playwright/test";
import { baseConfig } from "./playwright.config";

const configNoJs: Config = {
  ...baseConfig,
  use: { ...baseConfig.use, javaScriptEnabled: false },
  webServer: {
    ...baseConfig.webServer,
    command: "pnpm run build && pnpm run start:test",
  },
};

export default defineConfig(configNoJs);
