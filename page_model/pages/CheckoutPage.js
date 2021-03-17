import {Selector, t} from 'testcafe'

class CheckoutPage{
    constructor(){
        this.firstNameField = Selector('input[id="first-name"]')
        this.lastNameField = Selector('input[id="last-name"]')
        this.postalCodeField = Selector('input[id="postal-code"]')
        this.continueButton = Selector('.btn_primary.cart_button')
        this.errorMessage = Selector('h3').withText('Error')

        this.itemPrices = Selector('.inventory_item_price')
    }
    async submitCheckoutForm(firstName,lastName,postalCode){
        await t.typeText(this.firstNameField,firstName)
        await t.typeText(this.lastNameField,lastName)
        await t.typeText(this.postalCodeField,postalCode)
        await t.click(this.continueButton)
    }
    
}

export default new CheckoutPage()