const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { HomePage } = require('../pageObjects/HomePage');
const { validUser } = require('../utils/testData');


test.describe('Add to Cart', () => {

test('User can add product to cart', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  await loginPage.navigateToHome();
  await loginPage.openLoginPage();
  await loginPage.login(validUser.email, validUser.password);

  await homePage.addFirstProduct();
  await homePage.openCart();

  await expect(homePage.cartItem).toBeVisible();

})
});