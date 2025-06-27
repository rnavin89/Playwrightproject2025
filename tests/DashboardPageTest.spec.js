
const {test, expect} = require('@playwright/test')
const {LoginPage} = require('../pageObjects/LoginPage')
const { DashboardPage } = require('../pageObjects/DashboardPage')

let dashboardpage
let loginPage

test("Dashboard Validation", async({page})=>{
    
    loginPage = new LoginPage(page)
    dashboardpage = new DashboardPage(page)
    

})