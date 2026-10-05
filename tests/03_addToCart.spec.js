const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/login.page');
const { HomePage } = require('../pageObjects/home.page');
const { getLastCreatedUser } = require('../utils/testData');


test.describe('Add to Cart', () => {

test('User can log in and add Item to the Cart', async ({ page }) => {
  
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);
  const lastCreatedUser = getLastCreatedUser();

    await loginPage.navigateToHome();
    await loginPage.openLoginPage();
    await loginPage.login(lastCreatedUser.email, lastCreatedUser.password);
    await expect(loginPage.loggedInText).toBeVisible();


//Logged in User can add items to cart
    await homePage.addFirstProduct();
    await homePage.openCart();
    await expect(homePage.cartItem).toBeVisible();
})

});