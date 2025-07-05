import{test, expect, Page, Locator} from '@playwright/test'
import { RandomDataUtil } from '../utils/randomDataGenerator';

export class ContactusPage
{
    private page: Page;
    private readonly btnContactus: Locator;
    private readonly txtName: Locator;
    private readonly txtEmail: Locator;
    private readonly txtSubject: Locator;
    private readonly txtYourMessage: Locator;
    private readonly btnChooseFile: Locator;
    private readonly btnSubmit: Locator;
    private readonly msgSuccess: Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.btnContactus = page.locator('a[href="/contact_us"]');
        this.txtName = page.locator('input[name="name"]');
        this.txtEmail = page.locator('input[required="required"]');
        this.txtSubject = page.locator('input[name="subject"]');
        this.txtYourMessage = page.locator('textarea[name="message"]');
        this.btnChooseFile = page.locator('input[name="upload_file"]');
        this.btnSubmit = page.locator('input[name="submit"]');
        this.msgSuccess = page.locator('//div[@class="status alert alert-success"]');
    }

    async clickContactusButton()
    {
        await this.btnContactus.click();
    }

    async enterName(Name: string)
    {
       //await this.txtName.clear();
       await this.txtName.fill(RandomDataUtil.getName());
    }

    async enterEmail(Email: string)
    {
       //await this.txtEmail.clear();
       await this.txtEmail.fill(RandomDataUtil.getEmail());
    }

    async enterSubject(Subject: string)
    {
       //await this.txtSubject.clear();
       await this.txtSubject.fill(RandomDataUtil.getSubject());
    }

    async enterYourMessage(Subject: string)
    {
       //await this.txtYourMessage.clear();
       await this.txtYourMessage.fill(RandomDataUtil.getYourMessage());
    }

    async uploadFile()
    {
        await this.btnChooseFile.setInputFiles('UploadFiles/KaryaSiddhi.jpg');
    }

    async clickSubmitButton()
    {
        await this.btnSubmit.click();
    }

    async verifySuccessMsg()
    {
        console.log(await this.msgSuccess.textContent());
    }
}