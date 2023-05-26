const { expect } = require('@playwright/test')

exports.OnlinerPage = class OnlinerPage {
    constructor(page){
        this.page = page;
    }

    async typeInSearchField(product){
        await this.page.fill('.fast-search__input', product);
    }

    async chooseFirstCategory(){
        await this.page.frameLocator('#fast-search-modal iframe').locator('a.category__title').click();
    }

    async selectCheckBox(checkboxName){
        await this.page.getByLabel('schema-filter__checkbox-item').selectOption({ label: checkboxName});
    }

    


}