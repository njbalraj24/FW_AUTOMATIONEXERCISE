import {test, expect} from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'
import { TestConfig } from '../test.config'
import { RandomDataUtil } from '../utils/randomDataGenerator'
import { config } from 'process'
import { log } from 'console'

test('TC2 Login with Incorrect, Correct and LogOut flows',{tag:'@sanity'},async({page})=>{

    const config = new TestConfig();
    await page.goto(config.appUrl);

    const loginPage = new LoginPage(page);

    //Incorrect Login flow
    await loginPage.isLoginPageVisible();
    await loginPage.enterEmail(config.email);
    await loginPage.enterPassword(config.incorrectPwd);
    await loginPage.clickLogin();
    await loginPage.verifyIncorrectLoginMessage();
    await page.waitForTimeout(4000);

    //Correct Login flow
    await loginPage.enterEmail(config.email);
    await loginPage.enterPassword(config.password);
    await loginPage.clickLogin();
    await loginPage.verifyUserLogin();
    await page.waitForTimeout(4000);

    //Logout flow
    const logoutPage = new LogoutPage(page)
    logoutPage.clickLogoutButton();
    await page.waitForTimeout(4000);

})