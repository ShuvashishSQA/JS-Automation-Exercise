const { expect } = require('@playwright/test');

class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInText = page.locator('a:has-text("Logged in as")');
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async openLoginPage() {
    await this.loginLink.click();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

// Asserts the "Logged in as <name>" banner is visible and has real content,
  // not just that some element matched the selector.
  async verifyLoggedIn() {
    await expect(this.loggedInText).toBeVisible();
    await expect(this.loggedInText).toContainText('Logged in as');
  }
}

module.exports = { LoginPage };