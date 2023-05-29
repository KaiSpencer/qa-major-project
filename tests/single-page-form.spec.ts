import { test, expect } from "@playwright/test";

test("single page form submission", async ({ page, javaScriptEnabled }) => {
  await page.goto("/single-page-form");

  await expect(
    page.getByRole("heading", { level: 1, name: "Single page form" }),
  ).toBeVisible();

  await page.getByRole("textbox", { name: "NHS number" }).fill("1234567890");
  await page.getByRole("radio", { name: "Yes" }).check();

  await page.getByRole("button", { name: "Submit" }).click();
  await page.waitForURL("/single-page-form/success");

  await expect(
    page.getByRole("heading", { level: 1, name: "Success" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { level: 2, name: "Form Data" }),
  ).toBeVisible();
  await expect(
    page.getByText("NHS number: 1234567890", { exact: false }),
  ).toBeVisible();
  await expect(page.getByText("Over 18: Yes", { exact: false })).toBeVisible();
});
