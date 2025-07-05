import {test, expect, Page, Locator} from '@playwright/test'

export class LoginPage
{
  private readonly page: Page;
  private readonly txtEmail: Locator;
  private readonly txtPassword: Locator;
  private readonly btnLogin: Locator;
  private readonly verifyLogin: Locator;
  private readonly txtIncorrectLogin: Locator;
  private readonly btnDelete: Locator;
  private readonly msgAccDelete: Locator;
  private readonly msgPermDelete: Locator;
  private readonly btnDeleteContinue: Locator;

  constructor(page: Page)
  {
    this.page = page;
    this.txtEmail = page.locator('input[data-qa="login-email"]');
    this.txtPassword = page.getByPlaceholder('Password');
    this.btnLogin = page.getByRole('button',{name: 'Login'});
    this.verifyLogin = page.locator('//a[@href="/contact_us"]/following::li[1]');
    this.txtIncorrectLogin = page.locator('//p[contains(text(),"Your email")]');
    this.btnDelete = page.locator('a[href="/delete_account"]');
    this.msgAccDelete = page.locator('h2[data-qa="account-deleted"]');
    this.msgPermDelete = page.locator('//p[contains(text(),"permanently")]');
    this.btnDeleteContinue = page.locator('a[data-qa="continue-button"]');
  }

  async isLoginPageVisible()
  {
    const title = await this.page.title();
    if(title.includes('Login'))
    {
        return true;
    }
    return false;
  }

  async enterEmail(Email: string)
  {
    await this.txtEmail.clear();
    await this.txtEmail.fill(Email);
  }

   async enterPassword(Password: string)
  {
    await this.txtPassword.clear();
    await this.txtPassword.fill(Password);
  }

  async clickLogin()
  {
    await this.btnLogin.click();
  }

  async verifyUserLogin()
  {
    await this.verifyLogin.isVisible();
  }

  async verifyIncorrectLoginMessage()
  {
    console.log(await this.txtIncorrectLogin.textContent());
  }

  async clickDeleteAccount()
  {
    await this.btnDelete.click();
  }

  async verifyAccountDeleteMsg()
  {
    console.log(await this.msgAccDelete.textContent());
  }

  async verifyPermanetDeleteMsg()
  {
    console.log(await this.msgPermDelete.textContent());
  }

  async clickContinueButton()
  {
    await this.btnDeleteContinue.click();
  }
}