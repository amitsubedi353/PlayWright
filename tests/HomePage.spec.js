const {test, expect} =require('@playwright/test');
const exp = require('constants');

test('Home Page',async ({page})=>{

    await page.goto('https://www.demoblaze.com/');

    const pageTitle=await page.title();
    console.log('Page title is:', pageTitle);

    await expect(page).toHaveTitle('STORE');

    const pageURL=page.url();
    console.log('Page URL is:', pageURL);

    await expect(page).toHaveURL('https://www.demoblaze.com/');

    await page.close();

})