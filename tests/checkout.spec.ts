import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckOutPage } from '../pages/CheckoutPage';
import { users } from '../test-data/users';

test('User can buy a packback', async({page})=>{
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);
    const cartPage = new CartPage(page);
    const checkOutPage = new CheckOutPage(page);

    await loginPage.goto();
    await loginPage.login(users.standard.username, users.standard.password);
    await expect(page.getByText('Products')).toBeVisible();

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openCart();

    await expect(cartPage.itemNames).toHaveText('Sauce Labs Backpack');
    await cartPage.checkOut();

    await checkOutPage.fillDetails('Amit', 'Pandey', '211001');
    await checkOutPage.finish();

    await expect(checkOutPage.completeHeader).toHaveText('Thank you for your order!');
});