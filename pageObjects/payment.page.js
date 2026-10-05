const { expect } = require('@playwright/test');

class PaymentPage {
    constructor(page) {
        this.page = page;
        this.paymentHeader = page.getByRole('heading', { name: 'Payment' });
        this.nameOnCardInput = page.locator('input[name="name_on_card"]');
        this.cardNumberInput = page.locator('input[name="card_number"]');
        this.cvcInput = page.locator('input[name="cvc"]');
        this.expirationMonthInput = page.locator('input[name="expiry_month"]');
        this.expirationYearInput = page.locator('input[name="expiry_year"]');
        this.payAndConfirmOrderBtn = page.locator('#submit');
    }

    async verifyHeaders() {
        await expect(this.paymentHeader).toBeVisible();
    }

    async fillPaymentDetails(nameOnCard, cardNumber, cvc, expirationMonth, expirationYear) {
        await this.nameOnCardInput.fill(nameOnCard);
        await this.cardNumberInput.fill(cardNumber);
        await this.cvcInput.fill(cvc);
        await this.expirationMonthInput.fill(expirationMonth);
        await this.expirationYearInput.fill(expirationYear);
    }

    async payAndConfirmOrder() {
        await this.payAndConfirmOrderBtn.click();
    }
}

module.exports = { PaymentPage };