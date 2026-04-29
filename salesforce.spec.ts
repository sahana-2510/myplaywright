import test from "@playwright/test";

test('test a browser', async({page})=>{
    await page.goto("https://login.salesforce.com/?locale=in")
    console.log(await page.title())
    console.log(page.url());
    await page.waitForTimeout(12000)
    await page.waitForLoadState('domcontentloaded')


    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com')
    await page.locator('[id="password"]').fill('TestLeaf@2025')
    await page.locator('[name="Login"]').click()

    await page.locator('[class="slds-icon-waffle"]').click()
})

