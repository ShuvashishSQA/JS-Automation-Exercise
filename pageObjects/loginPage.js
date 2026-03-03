class LoginPage {
  constructor(page) {
    this.page = page;
    this.loginLink = page.locator('a[href="/login"]');
    this.emailInput = page.locator('input[data-qa="login-email"]');
    this.passwordInput = page.locator('input[data-qa="login-password"]');
    this.loginButton = page.locator('button[data-qa="login-button"]');
    this.loggedInText = page.locator('a:has-text("Logged in as")');
  }

  async navigate() {
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
}

module.exports = { LoginPage };