const {test, expect} = require('@playwright/test');

//Full Page Screenshot
//Specific Element Screenshot

test("Mouse Hover", async ({page}) =>{

    await page.goto("https://www.google.com/")
    await page.waitForTimeout(3000)
    await page.screenshot({path: "./Screenshots/screenshots.png"})

    
})


