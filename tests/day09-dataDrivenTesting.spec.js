//Day 9 - What is Data-Driven Testing?

import { test, expect } from "@playwright/test";
import loginData from "../test-data/loginData.json"
import { LoginPage } from "../pages/LoginPage";

const LOGIN_URL = "https://practicetestautomation.com/practice-test-login/"


test.describe("Login Page", () => {

    test("Valid Login", async ({ page }) => {

        const loginPage = new LoginPage(page);

        await page.goto(LOGIN_URL);

        await loginPage.login("student", "Password123");

    });
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