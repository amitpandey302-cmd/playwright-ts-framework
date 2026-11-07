import {test, expect} from '@playwright/test';

test('handle a new tab', async({page, context})=>{
    await page.goto('https://the-internet.herokuapp.com/windows');
    const newPagePromise = context.waitForEvent('page');
    
    await page.getByRole('link', {name:'Click Here'}).click();
    const newPage = await newPagePromise;

    await expect(newPage).toHaveTitle('New Window');
    await expect(page).toHaveTitle('The Internet');
});

test('read text inside nested frames', async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/nested_frames');

    const middle = page.frameLocator('frame[name="frame-top"]').frameLocator('frame[name="frame-middle"]');
    await expect(middle.locator('#content')).toHaveText('MIDDLE');
});

test('file upload',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload');

    await page.locator('#file-upload').setInputFiles('test-data/sample.txt');
    await page.locator('#file-submit').click();
    await expect(page.locator('h3')).toHaveText('File Uploaded!');

});