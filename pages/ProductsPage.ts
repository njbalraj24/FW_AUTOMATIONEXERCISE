import{test, expect, Page, Locator} from '@playwright/test'

export class ProductsPage
{
  private readonly page: Page;
  private readonly btnProducts: Locator;
  private readonly CountProducts: Locator;
  private readonly allProducts: Locator;
  private readonly allProductsPrize: Locator;
  private readonly txtSearchProduct: Locator;
  private readonly btnSearchIcon: Locator;
  private readonly btnViewProduct: Locator;
  private readonly singleProductDetails: Locator;
  private readonly btnAddToCart: Locator;

  constructor(page:Page)
  {
    this.page = page;
    this.btnProducts = page.locator('a[href="/products"]');
    this.CountProducts = page.locator('//div[@id="cartModal"]/following-sibling::div');
    this.allProducts = page.locator('//img[@alt="ecommerce website products"]/following-sibling::p');
    this.allProductsPrize = page.locator('//img[@alt="ecommerce website products"]/following-sibling::h2');
    this.txtSearchProduct = page.locator('input[name="search"]');
    this.btnSearchIcon = page.locator('(//button[@id="submit_search"])[1]');
    this.btnViewProduct = page.locator('a[href="/product_details/14"]');
    this.singleProductDetails = page.locator('//div[@class="product-information"]');
    this.btnAddToCart = page.locator('(//a[contains(@class,"cart")])[1]');
  }

  async clickProductsButton()
  {
    await this.btnProducts.click();
  }

  async checkCountOfProducts()
  {
    await expect(this.CountProducts).toHaveCount(34);
  }

  async printAllProductsName()
  {
    const AllProductsName: string[] = await this.allProducts.allTextContents();
    console.log(AllProductsName);
  }

  async printAllProductsPrize()
  {
    const AllProductsPrize: string[] = await this.allProductsPrize.allTextContents();
    console.log(AllProductsPrize);
  }

  async enterProductName(Product: string)
  {
    await this.txtSearchProduct.fill(Product);
  }

  async clickSearchIcon()
  {
    await this.btnSearchIcon.click();
  }

  async clickViewProductButton()
  {
    await this.btnViewProduct.click();
  }

  async printSingleProductDetails()
  {
    console.log(await this.singleProductDetails.allInnerTexts());
  }

  async clickAddtoCartButton()
  {
    await this.btnAddToCart.click();
  }
}