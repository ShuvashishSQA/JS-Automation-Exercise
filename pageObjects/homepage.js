// homePage.js
class HomePage {
    constructor(page) {
        this.page = page;
        this.product = page.locator(".product-image-wrapper").first(); // pick first product
        this.addToCartBtn = page.locator("a[data-product-id]").first();
        this.cartLink = page.locator("a[href='/view_cart']");
    }

    async addFirstProductToCart() {
        await this.product.hover();
        await this.addToCartBtn.click();
        await this.page.waitForSelector("#cartModal"); // wait for modal
    }

    async goToCart() {
        await this.cartLink.click();
    }
}

module.exports = HomePage;