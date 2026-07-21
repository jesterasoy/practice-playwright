//Day 9 - What is Data-Driven Testing?

import { expect } from "@playwright/test";
import { test } from "../fixtures/pages";
import loginData from "../test-data/loginData.json";
import { LoginPage } from "../pages/LoginPage";
import { dashboardPage } from "../pages/dashboardPage";
import { cartPage } from "../pages/cartPage";

test.describe("Login Page", () => {
  for (const user of loginData) {
    test(`Login  (${user.username} - ${user.expected})`, async ({
      loginPage,
    }) => {
      await loginPage.login(user.username, user.password);

      if (user.expected === "success") {
        await loginPage.verifySuccessfulLogin();
      } else {
        await loginPage.verifyInvalidLogin();
      }
    });
  }
});
