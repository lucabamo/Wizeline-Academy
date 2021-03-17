import {Selector, t} from 'testcafe'

class CartPage{
    constructor(){
        this.checkoutButton = Selector('.btn_action.checkout_button')
        this.shopingCartButton = Selector('.shopping_cart_container')
        this.itemPrices = Selector('.inventory_item_price')
    }

    async elementInTheShoppingCart(itemName){
        this.item = Selector('.inventory_item_name').withExactText(itemName)
        await t.click(this.shopingCartButton)
        await t.expect(this.item.exists).ok("Fails with item" + itemName)
    }

    
}



export default new CartPage()