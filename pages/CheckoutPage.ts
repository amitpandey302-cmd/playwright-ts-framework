import{type Page, type Locator} from '@playwright/test';

export class CheckOutPage{
    readonly page: Page;
    readonly fName: Locator;
    readonly lName: Locator;
    readonly zip: Locator;
    readonly continueBttn: Locator;
    readonly finishBttn: Locator;
    readonly completeHeader: Locator;

    constructor(page:Page){
        this.page = page;
        this.fName = page.getByPlaceholder('First Name');
        this.lName = page.getByPlaceholder('Last Name');
        this.zip = page.getByPlaceholder('Zip/Postal Code');
        this.continueBttn = page.getByRole('button',{name:'Continue'});
        this.finishBttn = page.getByRole('button',{name:'Finish'});
        this.completeHeader = page.getByRole('heading', {level:2});
    }

    async fillDetails(fName:string, lName:string, zip:string){
        await this.fName.fill(fName);
        await this.lName.fill(lName);
        await this.zip.fill(zip);
        await this.continueBttn.click();
    }

    async finish(){
        await this.finishBttn.click();
    }
}