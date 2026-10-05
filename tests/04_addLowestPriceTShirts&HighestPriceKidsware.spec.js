const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pageObjects/login.page');
const { HomePage } = require('../pageObjects/home.page');
const { ProductsPage } = require('../pageObjects/products.page');
const { ProductDetailsPage } = require('../pageObjects/productDetails.page');
const { CartPage } = require('../pageObjects/cart.page');
const { getLastCreatedUser } = require('../utils/testData');

test.describe('Add lowest price T-Shirts and highest price Kidsware to Cart', () => {

  test('Logged in user adds lowest priced T-shirt and highest priced Kidsware item to cart', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailsPage = new ProductDetailsPage(page);
    const cartPage = new CartPage(page);
    const lastCreatedUser = getLastCreatedUser();

    // --- Log in ---
    await loginPage.navigateToHome();
    await loginPage.openLoginPage();
    await loginPage.login(lastCreatedUser.email, lastCreatedUser.password);
    await expect(loginPage.loggedInText).toBeVisible();

    // --- Lowest priced Men's T-shirt ---
    await homePage.navigateToProducts();
    await productsPage.selectCategory('Men', 'Tshirts');

    const lowestTshirt = await productsPage.getExtremeProduct('lowest');
    console.log(`Lowest priced T-shirt: ${lowestTshirt.name} - Rs. ${lowestTshirt.price}`);

    await productsPage.clickViewProduct(lowestTshirt.href);
    await productDetailsPage.setQuantity(5);
    await productDetailsPage.addToCart();
    await expect(productDetailsPage.viewCartLink).toBeVisible();
    await homePage.continueShoppingBtn.click();

    // --- Highest priced Kidsware item (Kids has two subcategories: Dress, Tops & Shirts) ---
    await productsPage.selectCategory('Kids', 'Dress');
    const highestDress = await productsPage.getExtremeProduct('highest');

    //await homePage.navigateToProducts();
    await productsPage.selectCategory('Kids', 'Tops & Shirts');
    const highestTops = await productsPage.getExtremeProduct('highest');

    const winnerIsDress = highestDress.price >= highestTops.price;
    const winner = winnerIsDress ? highestDress : highestTops;
    console.log(`Highest priced Kidsware item: ${winner.name} - Rs. ${winner.price}`);

    // Re-navigate to whichever subcategory the winner came from, then click it
    //await homePage.navigateToProducts();
    await productsPage.selectCategory('Kids', winnerIsDress ? 'Dress' : 'Tops & Shirts');
    await productsPage.clickViewProduct(winner.href);

    await productDetailsPage.setQuantity(5);
    await productDetailsPage.addToCart();
    await expect(productDetailsPage.viewCartLink).toBeVisible();
    await homePage.openCart();
  });

});