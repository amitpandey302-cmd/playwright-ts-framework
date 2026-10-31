import {type Page, type Locator} from '@playwright/test';

export class CartPage{
    readonly page: Page;
    readonly itemNames: Locator;
    readonly checkOutBttn : Locator;

    constructor (page:Page){
        this.page = page;
        this.itemNames = page.locator('.cart_item .inventory_item_name');
        this.checkOutBttn = page.getByRole('button',{name:'checkout'});
    }

    async checkOut(){
        await this.checkOutBttn.click();
    }
}