const { expect } = require('@playwright/test');

class CheckOutPage {
  constructor(page) {
    this.page = page;

    // ── Checkout page elements ────────────────────────────────
    this.checkoutInBreadcrumb = page.locator('.breadcrumb li.active:has-text("Checkout")');
    this.addressDetailsHeading = page.getByRole('heading', { name: 'Address Details' });
    this.reviewOrderHeading = page.getByRole('heading', { name: 'Review Your Order' });
    this.placeOrderBtn = page.locator('a[href="/payment"]');
  }
  async verifyHeaders() {
    await expect(this.addressDetailsHeading).toBeVisible();
    await expect(this.reviewOrderHeading).toBeVisible();
  }

  async placeOrder() {
    await this.placeOrderBtn.click();
  }

}

module.exports = { CheckOutPage };