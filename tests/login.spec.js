import {test, expect} from "@playwright/test";
import { Login } from "../pages/login/Login";
import { About } from "../pages/about/about";
import { PlatformForTest } from "../pages/platformfortest/PlatformForTest";
import { Student } from "../pages/login/Student";

/*test('Login with Username and Password', async({page})=>{
    const login = new Login(page);
    await login.pageLoad();   
    await login.fillUsername("standard_user");
    await login.fillPassword("secret_sauce");
    login.submitButton();
    await expect(page.locator('text=Logout')).toBeVisible();
    await expect(page.locator('text=About')).toBeVisible();
    await expect(page.locator('text=Swag Labs')).toBeVisible();
    // Locate all `.item` elements under `.inventory-list`
    const items = page.locator('.inventory_list .inventory_item');
   // Assert that there are exactly 6 items
    await expect(items).toHaveCount(6);
    const about = new About(page);
    await about.clickMenu();
    await about.clickAbout();
    await about.clickProduct();
   // await about.checkHover();
    await about.clickPlatform();

    const platformfortest = new PlatformForTest(page);
    await platformfortest.clickGetStartFree();
    await expect(page).toHaveTitle('Sign Up for a Free Trial | Sauce Labs');
    await expect(page.locator('[id="title"]')).toBeVisible();

})
test('Login with Invalid Username and Password', async({page})=>{
    const login = new Login(page);
    await login.pageLoad();   
    await login.fillUsername("user");
    await login.fillPassword("sauce");
    login.submitButton();
    await page.waitForSelector('.error-message-container.error', { state: 'visible' });
    await expect(page.locator('.error-message-container.error')).toBeVisible();
})*/
test('Login with Username and Password', async({page})=>{
const student = new Student("Kavin", 32, "Testing", "Namakkal");
student.display();
})


