class signUpPage {
  constructor(page) {
    this.page = page;

    this.signUpTitleText = page.locator('h2:has-text("New User Signup!")');

    this.signUpLink = page.locator('a[href="/login"]');
    this.signUpEmailInput = page.locator('input[data-qa="signup-email"]');
    this.signUpNameInput = page.locator('input[data-qa="signup-name"]');
    this.signUpButton = page.locator('button[data-qa="signup-button"]');
  }

  async navigateToHome() {
    await this.page.goto('/');
  }

  async opensignUpPage() {
    await this.signUpLink.click();
  }

  async signUp(name, email) {
    await this.signUpNameInput.fill(name);
    await this.signUpEmailInput.fill(email);
    await this.signUpButton.click();
  }
}

module.exports = { signUpPage };