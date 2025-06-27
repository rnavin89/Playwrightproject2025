//import the test and expect module from playwright/test module
const {test, expect} = require('@playwright/test');

test("First TC", async function({browser}){
    // Launch the browser
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://www.google.com");  
})

test("Second TC", async ({page}) =>{

await page.goto("https://www.facebook.com");

})
// locator(), fill(), click(), tobevisible()
test.only("Login Page", async ({page}) =>{

    await page.goto("https://rahulshettyacademy.com/client");
    await expect(page.locator(".login-title")).toContainText("Log in");
    await expect(page.locator("label[for='email']")).toBeVisible()
    await page.locator("#userEmail").fill("RNAVIN89@GMAIL.COM");
    await expect(page.locator("label[for='password']")).toBeVisible()
    await page.locator("#userPassword").fill("Testing@123");
    await page.locator("#login").click();
    await expect(page.locator("//button[@routerlink='/dashboard/myorders']")).toBeVisible();
    
    //await page.locator(".login-wrapper-footer-text").click()
})

// textcontent(), alltextcontents(), first(), last(), nth(), selectOption(), 

test("Registration Page", async ({page}) =>{

    await page.setViewportSize({width:1366, height:726})
    
    await page.goto("https://rahulshettyacademy.com/client")
    await page.locator(".text-reset").click();

    await page.locator("#firstName").fill("Naveen");
    await page.locator("#lastName").fill("R");
    await page.locator("#userEmail").fill("rnavin89@gmail.com");
    await page.locator("#userMobile").fill("9952172750");
    await page.locator("//select[@class='custom-select ng-untouched ng-pristine ng-valid']").selectOption("Doctor");
    //RNAVIN89@GMAIL.COM
    //Testing@123
    await page.locator("//input[@value ='Male']").click()

    await page.locator("#userPassword").fill("testing123");
    await page.locator("#confirmPassword").fill("testing123");

    await page.locator(".col-md-1").click();
    // await expect(page.locator(".col-md-1")).toBeChecked()
    
    await page.locator("#login").click();

})

//Handling Radio Button, checkbox, dropdowns
// check(), uncheck(), 

//Dropdown - Static and Dynamic
// <select> - use selectOption()
// <div> - First click on dropdown and then click on the values



test("Dropdown and Checkbox", async({page})=>{

    await page.setViewportSize({width:1366, height:728})
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.locator("#exampleCheck1").check(); //Checkbox
    await expect(page.locator("#exampleCheck1")).toBeChecked()
    await page.locator("#exampleFormControlSelect1").selectOption("Female"); //dropdown
    await page.locator("#inlineRadio2").click();
    await expect(page.locator("#inlineRadio2")).toBeChecked()
           
    await page.waitForTimeout(5000);

})

test("Dropdown Selection", async({page})=>{

    await page.setViewportSize({width:1366, height:728})
    await page.goto("https://demoqa.com/select-menu");
    
    await page.locator(".css-1hwfws3").first().click();
    await page.waitForTimeout(2000)
    await page.locator("#react-select-2-option-1-0").click();
    await page.waitForTimeout(2000)

    await page.locator(".css-1hwfws3").nth(1).click();
    await page.waitForTimeout(2000)
    await page.locator("#react-select-3-option-0-1").click();
    await page.waitForTimeout(2000)

    await page.locator("#oldSelectMenu").selectOption({label: "Purple"});
    await page.waitForTimeout(2000)

    await page.locator(".css-1hwfws3").last().click();
    await page.waitForTimeout(2000)
    await page.locator("#react-select-4-option-0").click();
    await page.waitForTimeout(2000)
    await page.locator("#react-select-4-option-2").click();
    await page.waitForTimeout(2000)

    await page.selectOption("#cars",['volvo','Opel']);
    await page.waitForTimeout(2000)
    
    //await Page.selectOption()
})


// setTimeout(() => {debugger}, 3000)

