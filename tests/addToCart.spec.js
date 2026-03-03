const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { ProductsPage } = require('../pages/ProductsPage');
const { validUser } = require('../utils/testData');

test('User can add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const productsPage = new ProductsPage(page);

  await loginPage.navigate();
  await loginPage.openLoginPage();
  await loginPage.login(validUser.email, validUser.password);

  await productsPage.addFirstProduct();
  await productsPage.openCart();

  await expect(productsPage.cartItem).toBeVisible();
});