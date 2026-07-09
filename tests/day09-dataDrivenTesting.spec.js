//Day 9 - What is Data-Driven Testing?

import { test, expect } from "@playwright/test";
import loginData from "../test-data/loginData.json"

const LOGIN_URL = "https://practicetestautomation.com/practice-test-login/"


for (const user of loginData) {

    test(`Login with ${user.username}`, async ({ page }) => {

        await page.goto(LOGIN_URL);

        const username = page.getByLabel("Username");
        const password = page.getByLabel("Password");
        const submit = page.getByRole("button", { name: "Submit" });

        await username.fill(user.username);
        await password.fill(user.password);
        await submit.click();

    });
}




// test("Valid Login", async ({ page }) => {

//     await page.goto(LOGIN_URL);

//     const username = page.getByLabel("Username");
//     const password = page.getByLabel("Password");
//     const submit = page.getByRole("button", { name: "Submit" })

//     await username.fill(loginData[0].username)
//     await password.fill(loginData[0].password)
//     await submit.click();

// })