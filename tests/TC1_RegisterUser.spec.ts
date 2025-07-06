import { test, expect } from '@playwright/test'
import { SignUp } from '../pages/SignUpPage'
import { LoginPage } from '../pages/LoginPage'
import { LogoutPage } from '../pages/LogoutPage'
import { TestConfig } from '../test.config'
import { RandomDataUtil } from '../utils/randomDataGenerator'

test('TC1 Register User', {tag:'@sanity'}, async ({ page }) => {

    const config = new TestConfig();
    await page.goto(config.appUrl);  //Navigate to application URL

    //SignUp page
    const signUp = new SignUp(page);
    await signUp.isSignUpExists();
    await signUp.enterName(RandomDataUtil.getName());
    await signUp.enterEmail(RandomDataUtil.getEmail());
    await signUp.clickSignUpButton();

    //New Registration page
    await signUp.clickMrRadio();
    await signUp.enterPassword(RandomDataUtil.getPassword());
    await signUp.clickCheck1();
    await signUp.enterFirstName(RandomDataUtil.getFirstName());
    await signUp.enterLastName(RandomDataUtil.getLastName());
    await signUp.enterCompany(RandomDataUtil.getCompany());
    await signUp.enterAddress(RandomDataUtil.getAddress());
    await signUp.enterAddress2(RandomDataUtil.getAddress2());
    await signUp.enterState(RandomDataUtil.getState());
    await signUp.enterCity(RandomDataUtil.getCity());
    await signUp.enterZipCode(RandomDataUtil.getZipcode());
    await signUp.enterMobileNumber(RandomDataUtil.getMobileNo());
    await signUp.clickCreateButton();
    await signUp.verifyAccountCreateMsg();
    await signUp.verifyCongratulationsMsg();

    await page.waitForTimeout(4000);
    await signUp.clickContinueButton();

    //Login Page
    const loginPage = new LoginPage(page);
    await loginPage.verifyUserLogin();
    await page.waitForTimeout(4000);

    //Delete Account
    await loginPage.clickDeleteAccount();
    await loginPage.verifyAccountDeleteMsg();
    await loginPage.verifyPermanetDeleteMsg();
    await loginPage.clickContinueButton();

    await page.waitForTimeout(4000);
})