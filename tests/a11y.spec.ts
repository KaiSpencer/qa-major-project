import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.describe("should not have any automatically detectable accessibility issues", () => {
  test.beforeEach(async ({ javaScriptEnabled }) => {
    if (!javaScriptEnabled) {
      console.log(
        "Skipping accessibility test because JavaScript is disabled, which is not supported by Axe.",
      );

      test.skip();
    }
  });
  test("/", async ({ page }) => {
    await page.goto("/");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test("/single-page-form", async ({ page }) => {
    await page.goto("/single-page-form");

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
