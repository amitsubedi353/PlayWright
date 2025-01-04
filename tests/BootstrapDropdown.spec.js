const {test, expect}= require('@playwright/test')

test('Bootstrap Dropdown', async ({page}) =>{

    await page.goto('https://jquery-az.com/boots/demo.php?ex=63.0_2')

    await page.locator('.multiselect').click();

    await page.waitForTimeout(2000);

    //const options= await page.locator('ul>li label input')
    //await expect(options).toHaveCount(11);

    //const options= await page.$$('ul>li label input')
    //console.log("Number of Options:", options.length);
    //await expect(options.length).toBe(11);

   //selecting from dropdown option
    const options= await page.$$('ul>li label')
    for(let option of options)
    {
        const vaule= await option.textContent();
        //console.log("Vaule is", vaule);
        if(vaule.includes('Oracle') || vaule.includes('Java'))
        {
            await option.click();
        }
    }

    await page.waitForTimeout(5000);

    //Deselecting from dropdown option
    const options1= await page.$$('ul>li label')
    for(let option1 of options1)
    {
        const vaule1= await option1.textContent();
        //console.log("Value is", vaule1);
        if(vaule1.includes('Oracle') || vaule1.includes('Java') || vaule1.includes('HTML') || vaule1.includes('CSS'))
        {
            await option1.click();
        }
    }

    await page.waitForTimeout(5000);
})