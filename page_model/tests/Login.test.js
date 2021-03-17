import LoginPage from '../pages/LoginPage'
import { DATA } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'


fixture('Login feature testing').
page `https://www.saucedemo.com/`

//TC 1
test('User can login using valid credentials', async t =>{
    await LoginPage.submitLoginForm(DATA.STANDARD_VALID_USER.USERNAME,DATA.STANDARD_VALID_USER.PASSWORD)
    await t.expect(InventoryPage.productLabel.exists).ok('Error: Was not posible to login with valid credentials')
})

//TC 2
test('User can not login using invalid credentials', async t =>{
    await LoginPage.submitLoginForm(DATA.INVALID_USER.USERNAME,DATA.INVALID_USER.PASSWORD)
    await t.expect(LoginPage.errorMessage.exists).ok('Was posible to login with invalid credentials / error mesagge does not appear')
})