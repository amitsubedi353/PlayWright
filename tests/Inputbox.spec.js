const {test, expect}= require('@playwright/test')

test('handle inputbox', async ({page})=>{

    await page.goto('https://demoqa.com/automation-practice-form')

    await expect (await page.locator("//input[@id='firstName']")).toBeVisible();
    await expect (await page.locator("//input[@id='firstName']")).toBeEmpty();
    await expect (await page.locator("//input[@id='firstName']")).toBeEditable();
    await expect (await page.locator("//input[@id='firstName']")).toBeEnabled();

    await page.locator("//input[@id='firstName']").fill("Django");

    await page.waitForTimeout(5000);


})