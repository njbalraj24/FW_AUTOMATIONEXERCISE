import{test, expect} from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test('accessibility testing', async({page})=>{

    await page.goto("https://automationexercise.com/");

    //1. Scanning detect all types of WCAG violations
    const accessibilityScanResults=await new AxeBuilder({page}).analyze();
    console.log(accessibilityScanResults);
    console.log("Number of Violations are: ",accessibilityScanResults.violations.length);
});

test('accessibility testing - Scanning for few WCAG2.2 violations', async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/");

    //2. Scanning for few WCAG violations
    const accessibilityScanResults=await new AxeBuilder({page}).withTags(['wcag22a', 'wcag22aa']).analyze();
    console.log("Number of Violations are: ",accessibilityScanResults.violations.length);
    console.log(accessibilityScanResults);

})