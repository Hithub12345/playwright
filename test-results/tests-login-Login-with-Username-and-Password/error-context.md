# Test info

- Name: Login with Username and Password
- Location: C:\Users\kavin\work\playwright\tests\login.spec.js:2:5

# Error details

```
Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)

Locator: locator('.inventory_list .inventory_item')
Expected: 7
Received: 6
Call log:
  - expect.toHaveCount with timeout 5000ms
  - waiting for locator('.inventory_list .inventory_item')
    9 × locator resolved to 6 elements
      - unexpected value "6"

    at C:\Users\kavin\work\playwright\tests\login.spec.js:13:28
```

# Page snapshot

```yaml
- button "Open Menu"
- img "Open Menu"
- text: Swag Labs Products Name (A to Z)
- combobox:
  - option "Name (A to Z)" [selected]
  - option "Name (Z to A)"
  - option "Price (low to high)"
  - option "Price (high to low)"
- link "Sauce Labs Backpack":
  - /url: "#"
  - img "Sauce Labs Backpack"
- link "Sauce Labs Backpack":
  - /url: "#"
- text: carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection. $29.99
- button "Add to cart"
- link "Sauce Labs Bike Light":
  - /url: "#"
  - img "Sauce Labs Bike Light"
- link "Sauce Labs Bike Light":
  - /url: "#"
- text: A red light isn't the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included. $9.99
- button "Add to cart"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
  - img "Sauce Labs Bolt T-Shirt"
- link "Sauce Labs Bolt T-Shirt":
  - /url: "#"
- text: Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt. $15.99
- button "Add to cart"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
  - img "Sauce Labs Fleece Jacket"
- link "Sauce Labs Fleece Jacket":
  - /url: "#"
- text: It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office. $49.99
- button "Add to cart"
- link "Sauce Labs Onesie":
  - /url: "#"
  - img "Sauce Labs Onesie"
- link "Sauce Labs Onesie":
  - /url: "#"
- text: Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel. $7.99
- button "Add to cart"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
  - img "Test.allTheThings() T-Shirt (Red)"
- link "Test.allTheThings() T-Shirt (Red)":
  - /url: "#"
- text: This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton. $15.99
- button "Add to cart"
- contentinfo:
  - list:
    - listitem:
      - link "Twitter":
        - /url: https://twitter.com/saucelabs
    - listitem:
      - link "Facebook":
        - /url: https://www.facebook.com/saucelabs
    - listitem:
      - link "LinkedIn":
        - /url: https://www.linkedin.com/company/sauce-labs/
  - text: © 2025 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
   1 | import {test, expect} from "@playwright/test";
   2 | test('Login with Username and Password', async({page})=>{
   3 |     await page.goto("https://www.saucedemo.com/");
   4 |     await page.fill('[name="user-name"]', 'standard_user');
   5 |     await page.fill('[name="password"]', 'secret_sauce');
   6 |     await page.click('[type="submit"]');
   7 |     await expect(page.locator('text=Logout')).toBeVisible();
   8 |     await expect(page.locator('text=About')).toBeVisible();
   9 |     await expect(page.locator('text=Swag Labs')).toBeVisible();
  10 |     // Locate all `.item` elements under `.inventory-list`
  11 |     const items = page.locator('.inventory_list .inventory_item');
  12 |    // Assert that there are exactly 6 items
> 13 |        await expect(items).toHaveCount(7);
     |                            ^ Error: Timed out 5000ms waiting for expect(locator).toHaveCount(expected)
  14 |
  15 | })
```