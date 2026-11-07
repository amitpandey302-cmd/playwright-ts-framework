import { type Page, type Locator } from '@playwright/test';

export class InventoryPage {
    readonly page: Page;
    readonly title: Locator;
    readonly cartBadge: Locator;
    readonly cartLink: Locator;
    readonly sortDropDown: Locator;
    readonly itemNames: Locator;
    readonly itemPrices: Locator;

    constructor(page: Page) {
        this.page = page;
        this.title = page.locator('.title');
        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
         this.sortDropDown = page.locator('.product_sort_container');
        this.itemNames = page.locator('.inventory_item_name ');
        this.itemPrices = page.locator('.inventory_item_price');
    }

    async addToCart(productName: string) {
        await this.page
            .locator('.inventory_item')
            .filter({ hasText: productName })
            .getByRole('button', { name: 'Add to cart' })
            .click();
    }

    async openCart() {
        await this.cartLink.click();
    }

    async sortBy(option:string){
        await this.sortDropDown.selectOption(option);
    }
}