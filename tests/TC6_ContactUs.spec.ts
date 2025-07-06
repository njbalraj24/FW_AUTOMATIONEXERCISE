import{test, expect} from '@playwright/test'
import { TestConfig } from '../test.config';
import { ContactusPage } from '../pages/ContactusPage'
import { RandomDataUtil } from '../utils/randomDataGenerator';

test('TC6 Contact Us Form',{tag: '@regression'}, async({page})=>{

    const config = new TestConfig();
    await page.goto(config.appUrl);

    const contactUsPage = new ContactusPage(page);
    await contactUsPage.clickContactusButton();
    await contactUsPage.enterName(RandomDataUtil.getName());
    await contactUsPage.enterEmail(RandomDataUtil.getEmail());
    await contactUsPage.enterSubject(RandomDataUtil.getSubject());
    await contactUsPage.enterYourMessage(RandomDataUtil.getYourMessage());
    await contactUsPage.uploadFile();
    await contactUsPage.clickSubmitButton();
    await contactUsPage.verifySuccessMsg();

    await page.waitForTimeout(4000);

})