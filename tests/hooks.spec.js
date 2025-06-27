
const {test, expect} = require('@playwright/test');
//beforeAll()
//beforeEach()
//afterEach()
//afterAll()

 
test.beforeAll(async ()=>{
    console.log("Before All Hook")
 })

 test.beforeEach(async () =>{

    console.log("Before Each Hook")
 })

 test("Test one", async ()=>{

    await console.log("Test one Execution")
 })

 test("Test two", async ()=>{

    await console.log("Test two Execution")
 })


 test.afterEach(async ()=>{

    console.log("After Each Hook")
 })

 test.afterAll(async ()=>{

    console.log("After All Hook")
 })