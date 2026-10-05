class CartPage {
  constructor(page) {
    this.page = page;
    this.proceedToCheckoutBtn = page.locator('.check_out');
  }

  async proceedToCheckout() {
    await this.proceedToCheckoutBtn.click();
  }
}

module.exports = { CartPage };