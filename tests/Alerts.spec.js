const {test, except}= require('@playwright/test')

test.skip('Alert with OK', async ({page}) =>{

    page.on('dialog', async dialog =>{
        except(dialog.type()).toContain('alert')
        except(dialog.message()).toContain('I am an alert box!')
        await dialog.accept();
    })
    
    await page.click("//button[normalize-space()='Alert']");
    page.waitForTimeout(5000);
});

test.skip('Alert with ok and cancel', async ({page}) =>{
    
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog =>{
        except(dialog.type()).toContain('confirm')
        except(dialog.message()).toContain('Press a button!')
        //await dialog.dismiss();

    })
    await page.click('//button[normalize-space()="Confirm Box"]');
    await except(page.locator('//p[@id="demo"]')).toHaveText('You pressed OK!');

    await page.click('//button[normalize-space()="Confirm Box"]');
    await except(page.locator("//p[@id='demo']")).toHaveText('You Pressed Cancel!');

    await page.waitForTimeout(5000);

});

test('Prompt Dialog', async ({page}) =>{
    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog =>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain('Please enter your name:')
        expect(dialog.defaultValue()).toContain('Harry Potter')
        //await dialog.accept('django');
        await dialog.dismiss();

    })
    //await page.click('//button[normalize-space()="Prompt"]');
    //await expect(page.locator("//p[@id='demo']")).toHaveText('Hello django! How are you today?');

    await page.click('//button[normalize-space()="Prompt"]');
    await expect(page.locator('//p[@id="demo"]')).toHaveText('User cancelled the prompt.');

    await page.waitForTimeout(5000);

});