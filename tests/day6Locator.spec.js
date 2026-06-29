import { test, expect } from '@playwright/test';

test("Login Test", async ({ page }) => {

    await page.goto("https://e994c938ba06c0f5c4d04b2f126afe1a.sugartech.ph:2096/bubble-n-fizz/auth")

    const email = page.getByPlaceholder("Email");
    const password = page.getByPlaceholder("Password");
    const signIn = page.getByRole("button", { name: "Sign In" })
    const dashboard = page.getByText("RICH");

    await email.fill("test@test.com");
    await password.fill("Password123@");
    await signIn.click();

    await expect(dashboard).toBeVisible();


})