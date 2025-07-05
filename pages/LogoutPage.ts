import{test, expect, Locator, Page} from '@playwright/test'

export class LogoutPage
{
    private readonly page: Page;
    private readonly btnLogout:Locator;

    constructor(page: Page)
    {
        this.page = page;
        this.btnLogout = this.page.locator('a[href="/logout"]');
    }

    async clickLogoutButton()
    {
        await this.btnLogout.click();
    }
}