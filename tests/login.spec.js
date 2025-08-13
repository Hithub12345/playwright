import {test, expect} from "@playwright/test";
test('Login with Username and Password', async({page})=>{
    await page.goto("https://www.saucedemo.com/");
    await page.fill('[name="user-name"]', 'standard_user');
    await page.fill('[name="password"]', 'secret_sauce');
    await page.click('[type="submit"]');
    await expect(page.locator('text=Logout')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Swag Labs')).toBeVisible()
    // Locate all `.item` elements under `.inventory-list`
    const items = page.locator('.inventory_list .inventory_item')
   // Assert that there are exactly 6 items
       await expect(items).toHaveCount(6);


})