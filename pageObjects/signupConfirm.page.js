const { expect } = require('@playwright/test');

class SignupConfirmPage {
  constructor(page) {
    this.page = page;
    this.accountCreatedHeading = page.locator('h2[data-qa="account-created"]');
    this.continueButton = page.locator('a[data-qa="continue-button"]');
  }

  async verifyAccountCreated() {
    await expect(this.accountCreatedHeading).toBeVisible();
    await expect(this.accountCreatedHeading).toContainText('Account Created!');
  }

  async clickContinue() {
    await this.continueButton.click();
  }
}

module.exports = { SignupConfirmPage };
