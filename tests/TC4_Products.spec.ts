import{test, expect} from '@playwright/test'
import { TestConfig } from '../test.config'
import { ProductsPage } from '../pages/ProductsPage'

test('Products - Fetch all products names and prize, Search, Add to Cart',async({page})=>{

    const config = new TestConfig();
    await page.goto(config.appUrl);

    const productsPage = new ProductsPage(page);
    
    //Print Products Name and Prize 
    await productsPage.clickProductsButton();
    await productsPage.checkCountOfProducts();
    await productsPage.printAllProductsName();
    await productsPage.printAllProductsPrize();

    //Search Exact Product
    await productsPage.enterProductName(config.ProductName);
    await productsPage.clickSearchIcon();
    await productsPage.printAllProductsName();
    await productsPage.printAllProductsPrize();
    await page.waitForTimeout(4000);

    //Search Partial Product
    await page.goto(config.appUrl);
    await productsPage.clickProductsButton();
    await productsPage.enterProductName(config.PartialProduct);
    await productsPage.clickSearchIcon();
    await productsPage.printAllProductsName();
    await productsPage.printAllProductsPrize();
    await page.waitForTimeout(4000);

    //View 1 Product Details
    await page.goto(config.appUrl);
    await productsPage.clickProductsButton();
    await productsPage.clickViewProductButton();
    await productsPage.printAllProductsName();
    await productsPage.printAllProductsPrize();
    await page.waitForTimeout(4000);

    //Add 1 Product to Cart
    await page.goto(config.appUrl);
    await productsPage.clickProductsButton();
    await productsPage.clickAddtoCartButton();

})