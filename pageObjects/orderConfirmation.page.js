const { expect } = require('@playwright/test');

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.orderConfirmationHeader = page.locator('h2:has-text("Order Placed!")');
    this.orderConfirmationMessage = page.locator('p:has-text("Congratulations! Your order has been confirmed!")');
    this.downloadInvoiceBtn = page.locator('a:has-text("Download Invoice")');
  }

    async verifyOrderConfirmation() {
    await expect(this.orderConfirmationHeader).toBeVisible();
    await expect(this.orderConfirmationMessage).toBeVisible();
  }

  async downloadInvoice() {
    await this.downloadInvoiceBtn.click();
  }

}

module.exports = { OrderConfirmationPage };