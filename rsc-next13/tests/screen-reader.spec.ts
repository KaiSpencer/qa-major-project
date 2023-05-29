import { voTest as test } from "@guidepup/playwright";
import { expect } from "@playwright/test";
import itemTextSnapshot from "./itemTextSnapshot.json";

test.describe("Playwright VoiceOver", () => {
  test("I can navigate the Guidepup Github page", async ({
    page,
    voiceOver,
  }) => {
    // Navigate to Guidepup GitHub page
    await page.goto("https://github.com/guidepup/guidepup", {
      waitUntil: "domcontentloaded",
    });

    // Wait for page to be ready and interact
    await expect(page.locator('header[role="banner"]')).toBeVisible();
    await voiceOver.interact();

    // Move across the page menu to the Guidepup heading using VoiceOver
    while ((await voiceOver.itemText()) !== "Guidepup heading level 1") {
      await voiceOver.perform(voiceOver.keyboardCommands.findNextHeading);
    }

    // Assert that we've ended up where we expected and what we were told on
    // the way there is as expected.
    const itemTextLog = await voiceOver.itemTextLog();

    for (const expectedItem of itemTextSnapshot) {
      expect(!!itemTextLog.find((log) => log.includes(expectedItem))).toBe(
        true,
      );
    }
  });
});
