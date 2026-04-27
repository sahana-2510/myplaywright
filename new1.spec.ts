import test, { chromium, firefox } from "@playwright/test";

test('test a browser', async()=>{
    const browser = await chromium.launch({channel:'msedge', headless: false})
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.redbus.in/")
    await page.waitForTimeout(3000)
    
    const redbusTitle = await page.title();
    const redbusUrl = page.url();
    console.log("Redbus Title:", redbusTitle);
    console.log("Redbus Url:", redbusUrl);

})

test('Launch flipkart', async()=>{
    const broswer = await firefox.launch({headless: false})
    const context = await broswer.newContext()
    const page = await context.newPage()

    await page.goto("https://www.flipkart.com/")
    await page.waitForTimeout(3000)
    
    const flipkartTitle = await page.title();
    const flipkartUrl = page.url();
    console.log("Redbus Title:", flipkartTitle);
    console.log("Redbus Url:", flipkartUrl);





})