import { test, expect } from "@playwright/test";

test("multi page form submission", async ({ page, javaScriptEnabled }) => {
  await page.goto("/");
  await page.getByRole("link", { name: "Multiple Page Form" }).click();

  await expect(
    page.getByRole("heading", { level: 1, name: "Multi Page Form" }),
  ).toBeVisible();

  await page.getByRole("textbox", { name: "NHS number" }).fill("1234567890");
  await page.getByRole("button", { name: "Next" }).click();

  await page.getByRole("radio", { name: "Yes" }).check();
  await page.getByRole("button", { name: "Submit" }).click();

  await page.waitForURL("/multi-page-form/success");

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
