class ProductDetailsPage {
  constructor(page) {
    this.page = page;
    this.quantityInput = page.locator('#quantity');
    this.addToCartButton = page.locator('button.cart');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
  }

  async setQuantity(qty) {
    await this.quantityInput.fill(qty.toString());
  }

  async addToCart() {
    await this.addToCartButton.click();
  }
}

module.exports = { ProductDetailsPage };