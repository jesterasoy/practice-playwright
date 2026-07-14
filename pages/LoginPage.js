import { expect } from "@playwright/test";

export class LoginPage {
    constructor(page) {
        this.page = page;

        this.username = page.getByLabel("Username");
        this.password = page.getByLabel("Password");
        this.submit = page.getByRole("button", { name: "Submit" });
        this.success = page.getByRole("heading", {
            name: "Logged In Successfully"
        }); this.error = page.locator("#error", { name: "Your password is invalid!" })
    }

    async goto() {
        await this.page.goto("https://practicetestautomation.com/practice-test-login/")
    }

    async login(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submit.click();
    }

    async verifySuccessfulLogin() {
        await expect(this.success).toBeVisible();
    }

    async verifyInvalidLogin() {
        await expect(this.error).toBeVisible();
    }
}