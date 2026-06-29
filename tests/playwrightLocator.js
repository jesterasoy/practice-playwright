//Day 6: Playwright Advance Locators

import { test, expect } from "@playwright/test"

// test("Login Test", async ({ page }) => {

//     await page.goto("https://www.google.com/");

//     const username = getByLabel("Username");
//     const password = getByLabel("Password");
//     const loginButton = getByRole("button", { name: "Login" })
//     const heading = getByHeading("heading", { name: "Successfully Login" })

//     await username.fill("testing")
//     await password.fill("testing123")
//     await loginButton.click();

//     await expect(heading).toBeVisible();
// });

test("Invalid Login", async ({ page }) => {

    await page.goto("https://example.com");

    const email = page.getByLabel("Email");
    const password = page.getByLabel("Password");
    const signIn = page.getByRole("button", { name: "Sign In" })
    const errorMessage = page.getByHeading("heading", { name: "Invalid Email" })

    await email.fill("test@test.com");
    await password.fill("test123");
    await signIn.click();
    await expect(errorMessage).toBeVisible()
})