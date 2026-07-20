//Day 9 - What is Data-Driven Testing?

import { test, expect } from "@playwright/test";
import loginData from "../test-data/loginData.json"
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Page", () => {
    let loginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goto();
    })

    for (const user of loginData) {
        test(`Login  (${user.username} - ${user.expected})`, async ({ page }) => {

            await loginPage.login(user.username, user.password);

            if (user.expected === "success") {
                await loginPage.verifySuccessfulLogin();
            } else {
                await loginPage.verifyInvalidLogin();
            }
        })
    }

})


// test("Valid Login", async ({ page }) => {

//     await page.goto(LOGIN_URL);

//     const username = page.getByLabel("Username");
//     const password = page.getByLabel("Password");
//     const submit = page.getByRole("button", { name: "Submit" })

//     await username.fill(loginData[0].username)
//     await password.fill(loginData[0].password)
//     await submit.click();

// })