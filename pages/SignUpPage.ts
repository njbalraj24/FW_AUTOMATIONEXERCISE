import{test, expect, Page, Locator} from '@playwright/test'

export class SignUp
{
  //Locators
  //New User SignUp page
  private readonly page: Page;
  private readonly txtName: Locator;
  private readonly txtEmail: Locator;
  private readonly btnSignup: Locator;

  //Registration page - Account Information
  private readonly rdoMr: Locator;
  private readonly txtRName: Locator;
  private readonly txtREmail: Locator;
  private readonly txtRpassword: Locator;
  private readonly drpDOB: Locator;
  private readonly check1: Locator;
  private readonly check2: Locator;

  //Registration page - Address Information
  private readonly txtFirstname: Locator;
  private readonly txtLastname: Locator;
  private readonly txtCompany: Locator;
  private readonly txtAddress: Locator;
  private readonly txtAddress2: Locator;
  private readonly drpCountry: Locator;
  private readonly txtState: Locator;
  private readonly txtCity: Locator;
  private readonly txtZipcode: Locator;
  private readonly txtMobileNo: Locator;
  private readonly btnCreate: Locator;
  private readonly msgAccCreation: Locator;
  private readonly msgCongrats: Locator;
  private readonly btnContinue: Locator;

  //Constructor
  constructor(page: Page)
  {
    this.page = page;
    this.txtName = page.getByPlaceholder('Name');
    this.txtEmail = page.locator('input[data-qa="signup-email"]');
    this.btnSignup = page.getByRole("button",{name:'Signup'});
    
    this.rdoMr = page.locator('input[value="Mr"]');
    this.txtRName = page.locator('#name');
    this.txtREmail = page.locator('#email');
    this.txtRpassword = page.locator('#password');
    this.drpDOB = 
    this.check1 = page.locator('#newsletter');
    this.check2 = page.locator('#optin');

    this.txtFirstname = page.locator('#first_name');
    this.txtLastname = page.locator('#last_name');
    this.txtCompany = page.locator('#company');
    this.txtAddress = page.locator('#address1');
    this.txtAddress2 = page.locator('#address2');
    this.drpCountry = 
    this.txtState = page.locator('#state');
    this.txtCity = page.locator('#city');
    this.txtZipcode = page.locator('#zipcode');
    this.txtMobileNo = page.locator('#mobile_number');
    this.btnCreate = page.locator('button[data-qa="create-account"]');
    this.msgAccCreation = page.locator('h2[data-qa="account-created"]');
    this.msgCongrats = page.locator('//p[contains(text(),"Congratulations")]');
    this.btnContinue = page.locator('a[data-qa="continue-button"]');

  }

  //Action methods

  //Check if signup page exists
  async isSignUpExists()
  {
    let title: string = await this.page.title();
    if(title.includes('Signup'))
    {
        return true;
    }
    return false;
  }

  async enterName(Name: string): Promise<void>
  {
    await this.txtName.clear();
    await this.txtName.fill(Name);
  }

  async enterEmail(Email: string): Promise<void>
  {
    await this.txtEmail.clear();
    await this.txtEmail.fill(Email);
  }

  async clickSignUpButton(): Promise<void>
  {
    await this.btnSignup.click();
  }

  async clickMrRadio(): Promise<void>
  {
    await this.rdoMr.click();
  }

  async enterPassword(Password: string): Promise<void>
  {
    await this.txtRpassword.clear();
    await this.txtRpassword.fill(Password);
  }

  async clickCheck1(): Promise<void>
  {
    await this.check1.click();
  }

  async clickCheck2(): Promise<void>
  {
    await this.check2.click();
  }

  async enterFirstName(Firstname: string): Promise<void>
  {
    await this.txtFirstname.clear();
    await this.txtFirstname.fill(Firstname);
  }

  async enterLastName(Lastname: string): Promise<void>
  {
    await this.txtLastname.clear();
    await this.txtLastname.fill(Lastname);
  }

  async enterCompany(Company: string): Promise<void>
  {
    await this.txtCompany.clear();
    await this.txtCompany.fill(Company);
  }

  async enterAddress(Address: string): Promise<void>
  {
    await this.txtAddress.clear();
    await this.txtAddress.fill(Address);
  }

  async enterAddress2(Address2: string): Promise<void>
  {
    await this.txtAddress2.clear();
    await this.txtAddress2.fill(Address2);
  }

  async enterState(State: string): Promise<void>
  {
    await this.txtState.clear();
    await this.txtState.fill(State);
  }

  async enterCity(City: string): Promise<void>
  {
    await this.txtCity.clear();
    await this.txtCity.fill(City);
  }

  async enterZipCode(ZipCode: string): Promise<void>
  {
    await this.txtZipcode.clear();
    await this.txtZipcode.fill(ZipCode);
  }

  async enterMobileNumber(MobileNum: string): Promise<void>
  {
    await this.txtMobileNo.clear();
    await this.txtMobileNo.fill(MobileNum);
  }

  async clickCreateButton(): Promise<void>
  {
    await this.btnCreate.click();
  }

  async verifyAccountCreateMsg(): Promise<void>
  {
    console.log(await this.msgAccCreation.textContent());
  }

  async verifyCongratulationsMsg(): Promise<void>
  {
    console.log(await this.msgCongrats.textContent());
  }

  async clickContinueButton(): Promise<void>
  {
    await this.btnContinue.click();
  }

}