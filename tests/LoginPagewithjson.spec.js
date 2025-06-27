const {test, expect} = require('@playwright/test');
const {LoginPage} = require('../pageObjects/LoginPage')

const data = require('../utils/data.json')
console.log(data)
console.log(data.url)
console.log(data.username)

// for(let d of data){ //for getting the multiple data from the JSON file using for loop
//    console.log(d)
// }

let loginPage

test.beforeEach(async({page})=>{
    loginPage = new LoginPage(page)
    await loginPage.launchURL(data.url)
    await page.waitForTimeout(2000)

})

test("Login Page with Valid Credentials", async()=>{
    await loginPage.loginCredetials(data.username, data.password)
})

