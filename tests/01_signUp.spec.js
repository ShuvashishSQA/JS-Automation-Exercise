const { test, expect } = require('@playwright/test');
const { SignupPage } = require('../pageObjects/signup.page');
const { SignupDetailsPage } = require('../pageObjects/signupDetails.page');
const { SignupConfirmPage } = require('../pageObjects/signupConfirm.page');
const { getNewUserData, saveLastCreatedUser } = require('../utils/testData');

test.describe('Signup', () => {

  test('User can create a new account successfully', async ({ page }) => {

    const signupPage = new SignupPage(page);
    const signupDetailsPage = new SignupDetailsPage(page);
    const signupConfirmPage = new SignupConfirmPage(page);
    const newUserData = getNewUserData();
    
    // ── Step 1: Navigate and reach signup form
    await signupPage.navigateToHome();
    await signupPage.openSignupPage();

    // ── Step 2: Enter name and email on signup page
    // await signupPage.enterName(newUserData.name);
    // await signupPage.enterEmail(newUserData.email);
    await signupPage.signup(newUserData.name, newUserData.email);
    await signupPage.clickSignup();

    // ── Step 3: Verify page loaded with correct pre-filled values
    await signupDetailsPage.verifyPageAndPrePopulatedValues(newUserData.name, newUserData.email);

    // ── Step 4: Fill all account and address details
    await signupDetailsPage.fillAccountDetails(newUserData);

    // ── Step 5: Submit the form 
    await signupDetailsPage.clickCreateAccount();

    // ── Step 6: Verify account was created successfully
    await signupConfirmPage.verifyAccountCreated();

    // ── Step 7: Save the new user data for later tests
    saveLastCreatedUser(newUserData);
  });

});