const {test, expect} = require('@playwright/test')

test("Handling child window", async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/"); //one page


    const documentlink = await page.locator(".blinkingText").nth(0)
    //const newPage = await context.waitForEvent('page')

    // To run both the lines of code in parallel we use promise.all
    const [newPage] = await Promise.all([ 
        context.waitForEvent('page'), 
        documentlink.click()
    ])

    await expect(newPage.locator(".inner-box")).toContainText("Documents request");
    //await page.waitForTimeout(2000)
    await page.locator("#username").fill("rnavin@gmail")
    //await page.waitForTimeout(2000)
})


