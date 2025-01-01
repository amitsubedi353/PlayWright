const {test, expect} = require('@playwright/test')

test('AssertionsTest', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement= await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    const searchStoreBox= await page.locator('#small-searchterms')
    await expect(searchStoreBox).toBeEnabled()

    const maleRadioButton= await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    const newsletterCheckbox= await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    const regButton= await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    await expect (await page.locator('.page-title h1')).toHaveText('Register')

    await expect (await page.locator('.page-title h1')).toContainText('Reg')

    const emailInput= await page.locator('#Email')
    await emailInput.fill('test@admin.com')
    await expect(emailInput).toHaveValue('test@admin.com')

    const options= await page.locator('select[name="DateOfBirthMonth"] option')
    await expect(options).toHaveCount(13)

})