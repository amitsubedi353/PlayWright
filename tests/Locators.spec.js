//const {test, expect } = require("@playwright/test");
import {test, expect} from 'playwright/test'

test('Locators', async ({page})=>{

    await page.goto("https://app.develop.krispchats.com/auth/login")

    //await page.click("data-test-id=login-btn")

    await page.locator("data-test-id=email-test-field").fill("Amit")
    await page.locator("input data-test-id=password-test-field").fill("Subedi")
    await page.locator("data-test-id=login-btn").click()


})