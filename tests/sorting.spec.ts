import{test, expect } from '../fixtures/pages'
import { InventoryPage } from '../pages/InventoryPage';

test('sort name by A to Z', async({inventoryPage})=>{
    await inventoryPage.sortBy('az');
    const names = await inventoryPage.itemNames.allTextContents();
    expect(names).toEqual([...names].sort());
});

test('sort name by Z to A', async({inventoryPage})=>{
    await inventoryPage.sortBy('za');
    const names = await inventoryPage.itemNames.allTextContents();
    expect(names).toEqual([...names].sort().reverse());
});

test('sort price from low to high', async({inventoryPage})=>{
    await inventoryPage.sortBy('lohi');
    const texts = await inventoryPage.itemPrices.allTextContents();
    const prices = texts.map(t=> Number(t.replace('$','')));
    expect(prices).toEqual([...prices].sort((a,b)=> a-b));
});

test('sort price from high to low', async({inventoryPage})=>{
    await inventoryPage.sortBy('hilo');
    const texts = await inventoryPage.itemPrices.allTextContents();
    const prices = texts.map(t=>Number(t.replace('$','')));
    expect(prices).toEqual([...prices].sort((a,b)=> a-b).reverse());
})