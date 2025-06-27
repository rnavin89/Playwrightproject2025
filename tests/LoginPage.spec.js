const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage')

const url = "https://rahulshettyacademy.com/client"
const username = "RNAVIN89@GMAIL.COM"
const password = "Testing@123"

let loginPage

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await page.waitForTimeout(2000)

})

test("Login Page with Valid Credentials", async()=>{
    await loginPage.loginCredetials(username, password)
})





