//Day 7: Your First Real Automation Test

import { test, expect } from "@playwright/test"

// test("Valid Login", async ({ page }) => {
//     await page.goto("https://practicetestautomation.com/practice-test-login/");

//     const username = page.getByRole("textbox", { name: "Username" });
//     const password = page.getByRole("textbox", { name: "Password" });
//     const submit = page.getByRole("button", { name: "Submit" })
//     const heading = page.getByRole("heading", { name: "Logged In Successfully" })

//     await username.fill("student")
//     await password.fill("Password123")
//     await submit.click();
//     await expect(heading).toBeVisible();
// });

test("Invalid Password", async ({ page }) => {
    await page.goto("https://practicetestautomation.com/practice-test-login/");

    const username = page.getByLabel("Username");
    const password = page.getByLabel("Password");
    const submit = page.getByRole("button", { name: "Submit" })
    const errorMessage = page.locator("#error", { name: "Your Password is Invalid!" });
    const landingPage = "https://practicetestautomation.com/practice-test-login/";

    await username.fill("student");
    await password.fill("test123");
    await submit.click();

    await expect(errorMessage).toBeVisible();
    await expect(page).toHaveURL(landingPage);

});