import {Selector, t} from 'testcafe'

class LoginPage{
    constructor(){
        this.userNameField = Selector('input[name="user-name"]')
        this.passwordField = Selector('input[name="password"]')
        this.loginButton = Selector('#login-button')
        this.errorMessage = Selector('h3').withText('Epic sadface')
    }

    async submitLoginForm(username,password){
        await t.typeText(this.userNameField,username)
        await t.typeText(this.passwordField,password)
        await t.click(this.loginButton)
    }
}

export default new LoginPage()