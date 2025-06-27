
//click()
//Double click()
//right click()
//Mouse hover
//drag and drop
//pop-up/ALert Handling


const {test, expect} = require('@playwright/test');

test("mouse operation", async ({page}) =>{

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    
    //right click()
    await page.getByText("right click me").click({button:'right'})
    await page.waitForTimeout(2000)
    await page.getByText("Quit").click()
    
    //double click()
    await page.getByText("Double-Click Me To See Alert").dblclick()
    await page.waitForTimeout(2000)

    //pop-up or alert - handles by default or use dialog.accept(), dismiss()

})

test("handling pop-up-Accept", async ({page}) =>{

    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', dialog => {
        console.log(dialog.message())
        dialog.accept()
    })
    
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Ok")
    await page.waitForTimeout(3000)

})

test("handling pop-up-Dismiss", async ({page}) =>{

    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', dialog => {
        console.log(dialog.message())
        dialog.dismiss()
    })
    
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Cancel")
    await page.waitForTimeout(3000)


})

//Hover()
test("Mouse Hover", async ({page}) =>{

    await page.goto("https://www.spicejet.com/")
        
    await page.getByText("SpiceClub").first().hover()
    await expect(page.getByTestId("test-id-Earn Points")).toBeVisible()
    await page.waitForTimeout(3000)

})

//Drag and Drop()

//page.locator("").dragTo(page.locator(""))

//File Upload - setInputFiles(path of the file) - day 28 Lecture - 29th Oct 

//New File
