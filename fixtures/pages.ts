import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckOutPage } from '../pages/CheckOutPage';
import { users } from '../test-data/users';

type PageFixtures = {
    loginPage:LoginPage;
    inventoryPage:InventoryPage;
    cartPage:CartPage;
    checkOutPage:CheckOutPage;
};

export const test = base.extend<PageFixtures>({
    loginPage: async({page}, use) =>{
        await use(new LoginPage(page));
    },
    inventoryPage: async({page}, use)=>{
        const loginPage = new LoginPage(page);
        loginPage.goto();
        await loginPage.login(users.standard.username, users.standard.password);
        await use(new InventoryPage(page));
    },
    cartPage: async({page}, use)=>{
        await use(new CartPage(page));
    },
    checkOutPage: async({page}, use)=>{
        await use(new CheckOutPage(page));
    }
});

export {expect} from '@playwright/test';