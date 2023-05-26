import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.onliner.by/');
  
  
  await page.goto('https://catalog.onliner.by/buildingkit?lego_series%5B0%5D=starwars&lego_series%5Boperation%5D=union');
  await page.goto('https://catalog.onliner.by/buildingkit?mfr%5B0%5D=lego&lego_series%5B0%5D=starwars&lego_series%5Boperation%5D=union');
  await page.getByRole('link', { name: 'Конструктор LEGO Star Wars 75192 Сокол Тысячелетия' }).click();
});