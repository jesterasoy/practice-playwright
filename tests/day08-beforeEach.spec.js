//Day 8 - Organizing Tests Like a QA Automation Engineer

import { test, expect } from "@playwright/test"

const LOGIN_URL = "https://practicetestautomation.com/practice-test-login/"

beforeEach(async ({ page }) => {
    await page.goto(LOGIN_URL);
});




test("Valid Login", async ({ page }) => {
    const username = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    const submit = page.getByRole("button", { name: "Submit" });
    const heading = page.getByRole("heading", { name: "Logged In Successfully" })
    const errorMessage = page.getByRole("heading", { name: "Your Password is Invalid!" })

    await username.fill("student");
    await password.fill("Password123")
    await submit.click();
    await expect(page).toHaveURL(LOGIN_URL);

});

test("Invalid Password", async ({ page }) => {
    const username = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    const submit = page.getByRole("button", { name: "Submit" });
    const heading = page.getByRole("heading", { name: "Logged In Successfully" })
    const errorMessage = page.getByRole("heading", { name: "Your Password is Invalid!" })

    await username.fill("student");
    await password.fill("test")
    await submit.click();
    await expect(heading).toBeVisible();
});