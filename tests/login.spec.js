const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { validUser } = require('../utils/testData');

test('User can login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.openLoginPage();
  await loginPage.login(validUser.email, validUser.password);

  await expect(loginPage.loggedInText).toBeVisible();
});