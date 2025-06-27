
class LoginPage{

    constructor(page){

        this.page = page
        this.username = page.locator("#userEmail")
        this.password = page.locator("#userPassword")
        this.lognBtn = page.locator("//input[@id='login']")
    }

    //Reusuable Method created in the class file to launch the URL
    async launchURL(url) { 
        await this.page.goto(url)
    }

    //Reusuable method created in the class file to Login to the site
    async loginCredetials(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.lognBtn.click()
    }
    

}

module.exports = {LoginPage}