import{type Page, type Locator} from '@playwright/test';

export class LoginPage{
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginbttn: Locator;
    readonly errormsg: Locator;
    
    constructor(page:Page){
        this.page = page;
        this.usernameInput = page.getByPlaceholder('Username');
        this.passwordInput = page.getByPlaceholder('Password');
        this.loginbttn = page.getByRole('button',{name:'Login'});
        this.errormsg = page.locator('[data-test="error"]');
    }

    async goto(){
        await this.page.goto('https://www.saucedemo.com');
    }

    async login(username: string, password: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginbttn.click();
    }
}
