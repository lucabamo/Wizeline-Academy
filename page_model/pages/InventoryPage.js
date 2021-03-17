import {Selector, t} from 'testcafe'

class InventoryPage{
    constructor(){
        this.productLabel = Selector('.product_label')
        this.burgerButton = Selector('.bm-burger-button')
        this.LogoutButton = Selector('#logout_sidebar_link')
        this.shopingCartButton = Selector('.shopping_cart_container')
        this.yourCartLabel = Selector('.subheader').withExactText('Your Cart')

        this.inventoryBackButton = Selector('.inventory_details_back_button')
        this.addToCart = Selector('.btn_primary')
    }

    async addItemToCart(itemName){
        this.item = Selector('.inventory_item_name').withExactText(itemName)
        await t.click(this.item)
        await t.click(this.addToCart)
        await t.click(this.inventoryBackButton)
    }
}

export default new InventoryPage()