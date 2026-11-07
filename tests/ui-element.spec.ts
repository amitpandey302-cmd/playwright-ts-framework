import {test, expect} from '@playwright/test';

test('accept a JS alert', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.once('dialog', async dialog =>{
        await dialog.accept();
    });

    await page.getByRole('button', {name:'Click for JS Alert'}).click();
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert');
});

test('answer a JS script', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', dialog=> dialog.accept('Amit'));

    await page.getByRole('button', {name:'Click for JS Prompt'}).click();
    await expect(page.locator('#result')).toHaveText('You entered: Amit');
});

test('Dismiss a JS confirm', async({page}) =>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');
    page.once('dialog', dialog=> dialog.dismiss());

    await page.getByRole('button', {name:'Click for JS Confirm'}).click();
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel');
});