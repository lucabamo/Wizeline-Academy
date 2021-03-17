import LoginPage from '../pages/LoginPage'
import { DATA } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'
import CartPage from '../pages/CartPage'


fixture('Testing different functionalities once you had login')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(DATA.STANDARD_VALID_USER.USERNAME,DATA.STANDARD_VALID_USER.PASSWORD)
})

//TC3 
test('User can logout', async t =>{
    await t
        .click(InventoryPage.burgerButton)
        .click(InventoryPage.LogoutButton)
        .expect(LoginPage.userNameField.exists).ok('User can not logout')
})

//TC4
test('User can navigate to the shopping cart', async t =>{
    await t
        .click(InventoryPage.shopingCartButton)
        .expect(InventoryPage.yourCartLabel.exists).ok('User can not navigate to the shopping cart')
})

//TC5
test('User can add a single item to the shopping cart', async t =>{
    await InventoryPage.addItemToCart(DATA.PRODUCTS.ITEM1)
    //Validate function
    await CartPage.elementInTheShoppingCart(DATA.PRODUCTS.ITEM1)
})

//TC6
test('User can add multiple items to the shopping cart', async t =>{
    await InventoryPage.addItemToCart(DATA.PRODUCTS.ITEM1)
    await InventoryPage.addItemToCart(DATA.PRODUCTS.ITEM2)
    //Validate functions
    await CartPage.elementInTheShoppingCart(DATA.PRODUCTS.ITEM1)
    await CartPage.elementInTheShoppingCart(DATA.PRODUCTS.ITEM2)
})
