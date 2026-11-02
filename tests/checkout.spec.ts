import {test, expect} from '../fixtures/pages'


test('User can buy a backback', async({inventoryPage, cartPage, checkOutPage})=>{    

    await inventoryPage.addToCart('Sauce Labs Backpack');
    await expect(inventoryPage.cartBadge).toHaveText('1');
    await inventoryPage.openCart();

    await expect(cartPage.itemNames).toHaveText('Sauce Labs Backpack');
    await cartPage.checkOut();

    await checkOutPage.fillDetails('Amit', 'Pandey', '211001');
    await checkOutPage.finish();

    await expect(checkOutPage.completeHeader).toHaveText('Thank you for your order!');
});