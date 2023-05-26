// @ts-check
const { test, expect } = require('@playwright/test');
const { OnlinerPage } = require('../pages/OnlinerPage');


test('should show Page Object Model article', async ({ page }) => {
  const onlinerPage = new OnlinerPage(page);
  await page.goto('https://onliner.by');
  await onlinerPage.typeInSearchField('Lego');
  await onlinerPage.chooseFirstCategory();
});


