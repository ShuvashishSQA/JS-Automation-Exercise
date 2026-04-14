const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/login.page');
const { HomePage } = require('../pageObjects/homepage');
const { validUser } = require('../utils/testData');


test.describe('Add to Cart', () => {

test('User can log in', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  //Login Flow
  await loginPage.navigateToHome();
  await loginPage.openLoginPage();
  await loginPage.login(validUser.email, validUser.password);
  await expect(loginPage.loggedInText).toBeVisible();

  //Cart flow
  await homePage.addFirstProduct();
  await homePage.openCart();

  await expect(homePage.cartItem).toBeVisible();

})

});