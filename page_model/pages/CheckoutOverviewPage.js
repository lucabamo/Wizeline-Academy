import {Selector} from 'testcafe'

class CheckoutOverviewPage{
    constructor(){
        this.checkOutOverviewLabel= Selector('.subheader').withExactText('Checkout: Overview')
        this.finishButton = Selector('.btn_action.cart_button')
    }
}

export default new CheckoutOverviewPage()