import {Selector} from 'testcafe'

class CheckoutCompletePage{
    constructor(){
        this.checkOutCompleteLabel= Selector('.subheader').withExactText('Finish')
    }
}

export default new CheckoutCompletePage()