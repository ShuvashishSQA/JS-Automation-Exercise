class HomePage {
  constructor(page) {
    this.page = page;
    this.firstAddToCart = page.locator('.product-overlay .add-to-cart').first();
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.cartItem = page.locator('.cart_description');
  }

  async addFirstProduct() {
    await this.firstAddToCart.click();
    await this.continueShoppingBtn.click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { HomePage };