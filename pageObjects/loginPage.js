// loginPage.js
class LoginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = page.locator("a[href='/login']");
        this.emailInput = page.locator("input[data-qa='login-email']");
        this.passwordInput = page.locator("input[data-qa='login-password']");
        this.loginButton = page.locator("button[data-qa='login-button']");
        this.loggedInUser = page.locator(".shop-menu .fa-user");
    }

    async goToLogin() {
        await this.loginLink.click();
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getLoggedInUser() {
        return await this.loggedInUser.textContent();
    }
}

module.exports = LoginPage;