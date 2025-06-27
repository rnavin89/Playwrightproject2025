const {test, expect} = require('@playwright/test');

const productvalue = "IPHONE 13 PRO"
const countryname = " India"
const orderID = "683d671a81a2069530599aac"

test("Login Page", async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("RNAVIN89@GMAIL.COM")
    await page.locator("#userPassword").fill("Testing@123")
    await page.locator("//input[@id='login']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//button[normalize-space()='HOME']")).toBeVisible()
    await page.waitForTimeout(2000)

    const products = page.locator("div.card-body")
    const productNames = await products.locator("b").allTextContents()
    await console.log(productNames)
    const countofproduct = await products.count()
    await console.log(countofproduct)

    //const countofproduct = await products.count()
    await page.waitForTimeout(3000)
    await expect(countofproduct).toBeGreaterThan(0)

    for(let i=0;i<countofproduct;i++){

        const producttext = await products.nth(i).locator("b").textContent()
        console.log(producttext)
        
        if (producttext === productvalue){

            await products.nth(i).locator("button .fa-shopping-cart").click()
            await page.waitForTimeout(5000)
            break;
        }

    }

    await page.locator("//button[@routerlink='/dashboard/cart']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("div[class='heading cf'] h1")).toContainText('My Cart')
    await page.waitForTimeout(2000)
    await expect(page.locator("//h3[normalize-space()='IPHONE 13 PRO']")).toContainText("IPHONE 13 PRO");
    await page.locator("//button[normalize-space()='Buy Now']").click()

    //await page.locator("//input[@placeholder='Select Country']").fill("Ind")
    await page.getByPlaceholder("Select Country").pressSequentially("Ind")
    await page.waitForTimeout(5000)

    const countrydropdown = page.locator(".ta-results button")
    const countofdropdownvalue = await countrydropdown.count()
    console.log(countofdropdownvalue)

    //const countryselection = await countrydropdown.locator("ng-star-inserted").allTextContents()
    //const countrylist = await countryselection.locator("i").allTextContents()
    //console.log(countryselection)

   for(let j=0; j<countofdropdownvalue; j++){

        const dropdowntextvalue = await countrydropdown.nth(j).textContent()
        console.log(dropdowntextvalue)

        if (dropdowntextvalue === countryname){

            await countrydropdown.nth(j).click()
            await page.waitForTimeout(2000)
            break;
        }
   }

   await page.locator(".action__submit").click()
   await expect(page.locator(".hero-primary")).toContainText(' Thankyou for the order. ')
   const order_id = await page.locator("label.ng-star-inserted").textContent()
   console.log("Your Order ID is - " + order_id)

})

test("Order Page", async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator("#userEmail").fill("RNAVIN89@GMAIL.COM")
    await page.locator("#userPassword").fill("Testing@123")
    await page.locator("//input[@id='login']").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("//button[normalize-space()='HOME']")).toBeVisible()
    await page.waitForTimeout(2000)

    await page.locator("[routerlink='/dashboard/myorders']").click()
    await page.waitForTimeout(5000)
    await expect(page.locator("h1.ng-star-inserted")).toBeVisible()
    await page.waitForTimeout(2000)

    const row = await page.locator("tbody tr")
    const rowcount = await row.count()

    console.log("No of Rows is " + rowcount)

    for(let i = 0; i<rowcount; i++){

        const orderrows = await row.nth(i).locator("th").textContent()
        console.log(orderrows)
        if(orderID.includes(orderrows)){

               await row.nth(i).locator("button").first().click()
               await page.waitForTimeout(2000)
               break
        }
    }



})

