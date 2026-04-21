class SignupDetailsPage {
  constructor(page) {
    this.page = page;

    // ── Page heading ──────────────────────────────────────────
    this.accountInfoHeading = page.getByRole('heading', { name: 'Enter Account Information' });

    // ── Pre-populated fields (validate what came from signup) ──
    this.nameInput = page.locator('input[data-qa="name"]');
    this.emailInput = page.locator('input[data-qa="email"]');


    // ── Account info ──────────────────────────────────────────
    this.titleMr = page.locator('input[id="id_gender1"]');
    this.titleMrs = page.locator('input[id="id_gender2"]');
    this.passwordInput = page.locator('input[data-qa="password"]');
    this.dayDropdown = page.locator('select[data-qa="days"]');
    this.monthDropdown = page.locator('select[data-qa="months"]');
    this.yearDropdown = page.locator('select[data-qa="years"]');


    // ── Address info ──────────────────────────────────────────
    this.firstNameInput = page.locator('input[data-qa="first_name"]');
    this.lastNameInput = page.locator('input[data-qa="last_name"]');
    this.companyInput = page.locator('input[data-qa="company"]');
    this.address1Input = page.locator('input[data-qa="address"]');
    this.address2Input = page.locator('input[data-qa="address2"]');
    this.countryDropdown = page.locator('select[data-qa="country"]');
    this.stateInput = page.locator('input[data-qa="state"]');
    this.cityInput = page.locator('input[data-qa="city"]');
    this.zipcodeInput = page.locator('input[data-qa="zipcode"]');
    this.mobileInput = page.locator('input[data-qa="mobile_number"]');

    // ── Submit ────────────────────────────────────────────────
    this.createAccountBtn = page.locator('button[data-qa="create-account"]');
  }

  // // Verify the page loaded and pre-populated values are correct
  // async verifyPageAndPrePopulatedValues(expectedName, expectedEmail) {
  //   await this.accountInfoHeading.waitFor({ state: 'visible' });
  //   await expect(this.nameInput).toHaveValue(expectedName);
  //   await expect(this.emailInput).toHaveValue(expectedEmail);
  // }

  // Fill all account and address details
  async fillAccountDetails(details) {
    // Title
    if (details.title === 'Mr') {
      await this.titleMr.check();
    } else {
      await this.titleMrs.check();
    }

    // Account info
    await this.passwordInput.fill(details.password);
    await this.dayDropdown.selectOption(details.day);
    await this.monthDropdown.selectOption(details.month);
    await this.yearDropdown.selectOption(details.year);

    // Address info
    await this.firstNameInput.fill(details.firstName);
    await this.lastNameInput.fill(details.lastName);
    await this.companyInput.fill(details.company);
    await this.address1Input.fill(details.address1);
    await this.address2Input.fill(details.address2);
    await this.countryDropdown.selectOption(details.country);
    await this.stateInput.fill(details.state);
    await this.cityInput.fill(details.city);
    await this.zipcodeInput.fill(details.zipcode);
    await this.mobileInput.fill(details.mobile);
  }

  async clickCreateAccount() {
    await this.createAccountBtn.click();
  }
}

module.exports = { SignupDetailsPage };