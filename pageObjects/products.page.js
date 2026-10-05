const { expect } = require('@playwright/test');

class ProductsPage {
  constructor(page) {
    this.page = page;
    this.productWrappers = page.locator('.product-image-wrapper');
  }

  // e.g. selectCategory('Men', 'Tshirts') or selectCategory('Kids', 'Dress')
async selectCategory(mainCategory, subCategory) {
  // Click the accordion header to expand it (Women / Men / Kids)
  await this.page.locator(`a[href="#${mainCategory}"]`).click();
  // Scope the subcategory click to that expanded panel — avoids ambiguity,
  // since "Dress" exists under both Women and Kids
  await this.page.locator(`#${mainCategory}`).getByRole('link', { name: subCategory, exact: true }).click();
}

  // order: 'lowest' or 'highest'
  async getExtremeProduct(order = 'lowest') {
    const count = await this.productWrappers.count();
    let target = order === 'lowest' ? Infinity : -Infinity;
    let targetHref = null;
    let targetName = null;

    for (let i = 0; i < count; i++) {
      const wrapper = this.productWrappers.nth(i);
      const priceText = await wrapper.locator('.productinfo h2').innerText();
      const price = parseInt(priceText.replace('Rs.', '').trim(), 10);
      const href = await wrapper.getByRole('link', { name: 'View Product' }).getAttribute('href');
      const name = await wrapper.locator('.productinfo p').innerText();

      const isBetter = order === 'lowest' ? price < target : price > target;
      if (isBetter) {
        target = price;
        targetHref = href;
        targetName = name;
      }
    }

    return { price: target, href: targetHref, name: targetName };
  }

  async clickViewProduct(href) {
    await this.page.locator(`a[href="${href}"]`).click();
  }
}

module.exports = { ProductsPage };
