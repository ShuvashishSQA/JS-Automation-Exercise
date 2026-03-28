class HomePage {
  constructor(page) {
    this.page = page;
    this.firstAddToCart = page.locator('.product-overlay .add-to-cart').first();
    this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');
    this.cartLink = page.locator('a[href="/view_cart"]');
    this.cartItem = page.locator('.cart_description');
  }

async addFirstProduct() {

  // ✅ Step 1: hover over the product card to reveal the overlay
  const firstProduct = this.page.locator('.productinfo').first();
  await firstProduct.hover();

  // ✅ Step 2: now the Add to Cart button is visible — click it
  await this.firstAddToCart.click();

  // ✅ Step 3: wait for modal to fully appear before clicking
  await this.continueShoppingBtn.waitFor({ state: 'visible' });
  await this.continueShoppingBtn.click();
}

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { HomePage };