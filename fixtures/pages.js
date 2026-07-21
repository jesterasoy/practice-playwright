import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

export const test = base.extend({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await use(loginPage);
  },
  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await dashboardPage.goto();
    await use(dashboardPage);
  },
  cartPage: async ({ page }, use) => {
    const cartPage = new CartPage(page);
    await cartPage.goto();
    await use(cartPage);
  },
});
