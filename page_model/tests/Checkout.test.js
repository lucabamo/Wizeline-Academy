import CartPage from "../pages/CartPage"
import InventoryPage from "../pages/InventoryPage"
import LoginPage from '../pages/LoginPage'
import { DATA } from '../data/Constants'
import CheckoutPage from "../pages/CheckoutPage"
import CheckoutOverviewPage from "../pages/CheckoutOverviewPage"
import CheckoutCompletePage from "../pages/CheckoutCompletePage"

fixture('Testing checkout')
.page `https://www.saucedemo.com/`
.beforeEach(async t => {
    await LoginPage.submitLoginForm(DATA.STANDARD_VALID_USER.USERNAME,DATA.STANDARD_VALID_USER.PASSWORD)
    await InventoryPage.addItemToCart(DATA.PRODUCTS.ITEM1)
    await InventoryPage.addItemToCart(DATA.PRODUCTS.ITEM2)
    await t
    .click(InventoryPage.shopingCartButton)
    .click(CartPage.checkoutButton)
})

//TC7
test('User continue with missing information', async t =>{
    await t
    .typeText(CheckoutPage.lastNameField,DATA.CHECKOUT_INFO.LAST_NAME)
    .typeText(CheckoutPage.postalCodeField,DATA.CHECKOUT_INFO.POSTAL_CODE)
    .click(CheckoutPage.continueButton)
    .expect(CheckoutPage.errorMessage.exists).ok('Error message does not appear for missing information')
})

//TC8
test('User navigates to the overview page once his data has been filled', async t =>{
    await 
    CheckoutPage.submitCheckoutForm(DATA.CHECKOUT_INFO.FIRST_NAME,DATA.CHECKOUT_INFO.LAST_NAME,DATA.CHECKOUT_INFO.POSTAL_CODE)
    await t.expect(CheckoutOverviewPage.checkOutOverviewLabel.exists).ok('User can not navigates to the overview page')
})

//TC9
test('Validate items in the overview page match with the added items', async t =>{
    await CheckoutPage.submitCheckoutForm(DATA.CHECKOUT_INFO.FIRST_NAME,DATA.CHECKOUT_INFO.LAST_NAME,DATA.CHECKOUT_INFO.POSTAL_CODE)
    if(await t.expect(CheckoutOverviewPage.checkOutOverviewLabel.exists).ok()){
        let pricesCheckout = await CheckoutPage.itemPrices
        let pricesCart = await CartPage.itemPrices
        for(let i = 0; i < 2; i++){
            await t.expect(pricesCheckout[i]).eql(pricesCart[i],"Price does not match")
        }
    }
})

//TC10
test('User completes a purchase', async t =>{
    await 
    CheckoutPage.submitCheckoutForm(DATA.CHECKOUT_INFO.FIRST_NAME,DATA.CHECKOUT_INFO.LAST_NAME,DATA.CHECKOUT_INFO.POSTAL_CODE)
    await t
        .click(CheckoutOverviewPage.finishButton)
        .expect(CheckoutCompletePage.checkOutCompleteLabel.exists).ok('User can not complete a purchase')
})
