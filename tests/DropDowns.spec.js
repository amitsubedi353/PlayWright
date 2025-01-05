const {test, expect}= require('@playwright/test')

test("Handle dropdowns",async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    //await page.locator("#country").selectOption({label:'Japan'});
    //await page.locator('#country').selectOption('Germany');
    //await page.locator("#country").selectOption({value: 'uk'});
    //await page.locator('#country').selectOption({index: 1});
    //await page.selectOption("#country",'India');

    //const options= await page.locator('#country option');
    //await expect(options).toHaveCount(10);

    //const options= await page.$$('#country option');
    //console.log("Number of options:", options.length);
    //await expect(options.length).toBe(10);

    //const content= await page.locator('#country').textContent();
    //await expect(content.includes('China')).toBeTruthy();

    /*
    const options= await page.$$('#country option');
    let status= false;

    for(const option of options)
    {
        //console.log(await option.textContent())
        let value= await option.textContent();
        if(value.includes('France'))
        {
            status= true;
            break;
        }

    }
    expect(status).toBeTruthy();
    */

    const options= await page.$$('#country option')
    for(const option of options)
    {
        const value= await option.textContent();
        if(value.includes('France'))
        {
            await page.selectOption('#country', value);
            break;
        }
    }

    await page.waitForTimeout(5000);
})