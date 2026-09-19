const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/login.page');
const { getLastCreatedUser } = require('../utils/testData');

test.describe('Login',() => {
  
test('User can login with just created account', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const lastCreatedUser = getLastCreatedUser();

    await loginPage.navigateToHome();    // ✅ go to homepage first
    await loginPage.openLoginPage();     // ✅ click login link to reach login page
    await loginPage.login(lastCreatedUser.email, lastCreatedUser.password);
    await expect(loginPage.loggedInText).toBeVisible();

});
 
})
