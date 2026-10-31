import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('login', () => {
    let loginPage:LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);    
        loginPage.goto();
    });
    test('valid user can login', async ({ page }) => {
        await loginPage.login('standard_user','secret_sauce');
        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products')).toBeVisible();
    });
    test('Locked Out user', async({page})=>{
        await loginPage.login('locked_out_user','secret_sauce');
        await expect(loginPage.errormsg).toContainText(/user has been locked out/i);
    });
    test('Wrong credentials', async({page}) =>{
        await loginPage.login('locked_out_user','wrong_password');
        await expect(loginPage.errormsg).toContainText(/username and password do not match/i);
    });
});