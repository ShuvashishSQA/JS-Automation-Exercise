const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/LoginPage');
const { validUser } = require('../utils/testData');

test.describe('Login',() => {test('User can login with valid credentials', async ({ page }) => {

  const loginPage = new LoginPage(page);

    await loginPage.navigateToHome();    // ✅ go to homepage first
    await loginPage.openLoginPage();     // ✅ click login link to reach login page
    await loginPage.login(validUser.email, validUser.password);
    await expect(loginPage.loggedInText).toBeVisible();

});

})
