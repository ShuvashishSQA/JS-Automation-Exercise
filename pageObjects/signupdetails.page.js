class signUpDetailsPage{
    constructor(page){
        this.page = page;

        this.userTitle = page.locator('label[for="id_gender1"]');
        this.password = page.locator('input[data-qa="password"]');
        this.dateOfBirth = page.locator('select[data-qa="days"]');
        this.monthOfBirth = page.locator('select[data-qa="months"]');
        this.dateOfBirth = page.locator('select[data-qa="years"]');

    }
}