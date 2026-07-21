import { test } from "@playwright/test";
import { clear } from "node:console";

test("Authenticate User", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");

  await page.locator("#user-name").fill("standard_user");
  await page.locator("#password").fill("secret_sauce");
  await page.getByRole("button", { name: "Login" }).click();

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});

test("Inventory Page", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");
});
