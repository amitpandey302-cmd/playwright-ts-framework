import { test, expect } from '@playwright/test';

test.describe('login', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com');
    });
    test('valid user can login', async ({ page }) => {
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', { name: 'Login' }).click();

        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products')).toBeVisible();

    });

    test('Locked Out user', async({page})=>{
        await page.getByPlaceholder('Username').fill('locked_out_user');
        await page.getByPlaceholder('Password').fill('secret_sauce');
        await page.getByRole('button', {name:'Login'}).click();

        await expect(page.getByText(/user has been locked out/i)).toBeVisible();
    });

    test('Wrong credentials', async({page}) =>{
        await page.getByPlaceholder('Username').fill('standard_user');
        await page.getByPlaceholder('Password').fill('wrong_password');
        await page.getByRole('button',{name:'Login'}).click();

        await expect(page.getByText(/username and password do not match/i)).toBeVisible();
    });
});