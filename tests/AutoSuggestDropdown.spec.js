const {test, expect}= require('@playwright/test')

test('Auto Suggest Dropdown', async ({page}) =>{

    await page.goto('https://www.redbus.in/')

    
    await page.locator('#src').fill('Delhi');
    await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

    const cityOptions= await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

    for(let option of cityOptions)
    {
        const value= await option.textContent()
        //console.log(value);
        if(value.includes('India Gate'))
        {
            await option.click();
            break;
        }
    }
    
   await page.locator('#dest').fill('Mumbai');
   await page.waitForSelector("//li[contains(@class,'sc-iwsKbI')]/div/text[1]");

   const cityoptions1= await page.$$("//li[contains(@class,'sc-iwsKbI')]/div/text[1]")

   for(let option1 of cityoptions1)
   {
        const value1= await option1.textContent()
        console.log(value1);
        if(value1.includes('Andheri East'))
        {
            await option1.click();
            break;
        }
   }

  await page.locator("//i[@class='sc-cSHVUG NyvQv icon icon-datev2']").click();
  await page.locator(".DayTiles__CalendarDaysSpan-sc-1xum02u-1.fgdqFw").click();
  await page.locator("#search_button").click();

  await page.locator("li[id='23477428'] div[class='button view-seats fr']").click();
/*
  await page.locator("//div[@class='labelCalendarContainer']").click();

  const dates= await page.$$("//div[@class='DatePicker__CalendarContainer-sc-1kf43k8-0 jQCNYF']//span")

  for(let date of dates)
  {
    const textContent = await date.evaluate(el => el.textContent.trim());
    if (/^\d+$/.test(textContent)) {
        console.log(textContent);
    }
  }
  //------------------------------
  {
    const elementHandle= await date.getProperty('textContent');
    const textContent= await elementHandle.jsonValue();
    const allDates= textContent.trim();
    
    const dateArray= allDates.split('\n').filter(item => /^\d+$/.test(item));
    console.log(dateArray.join('\n'));

    const allDates= (await date.textContent.trim());
    const dateArray= allDates.split('\n').filter(item => /^\d+$/.test(item));
    console.log(dateArray.join("\n"));
    if (allDates.match(/^\d+$/))
    {
        console.log(allDates);
    }
    //console.log(allDates);
    if(allDates.includes('25'))
    {
        await date.click();
        break;
    }*/
  
    await page.waitForTimeout(5000);
})


const dates = await page.$x("//div[@class='DatePicker__CalendarContainer-sc-1kf43k8-0 jQCNYF']//span");

for (let date of dates) {
    const textContent = await date.evaluate(el => el.textContent.trim());
    if (/^\d+$/.test(textContent)) {
        console.log(textContent);
    }
}
