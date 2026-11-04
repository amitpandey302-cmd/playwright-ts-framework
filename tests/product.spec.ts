import fs from 'fs';
import path from 'path';
import {test, expect} from '../fixtures/pages';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';

const filepath = path.join(__dirname,'../test-data/products.json');
const products = JSON.parse(fs.readFileSync(filepath,'utf-8'));

for (const product of products){
    test(`User adds ${product.name} to the cart`, async({inventoryPage, cartPage}) =>{
        await inventoryPage.addToCart(product.name);
        await expect(inventoryPage.cartBadge).toHaveText('1');
        await inventoryPage.openCart();
        await expect(cartPage.itemNames).toHaveText([product.name]);
    });
}