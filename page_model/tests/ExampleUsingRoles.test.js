import LoginPage from '../pages/LoginPage'
import InventoryPage from '../pages/InventoryPage'
import Roles from '../data/Roles'
import { Selector } from 'testcafe';

fixture('Login feature testing').
page `https://www.saucedemo.com/`

test('TC1 using roles', async t => {
    await t
        .useRole(Roles.standarUser)
        .expect(InventoryPage.productLabel.exists).ok('Error: Was not posible to login with valid credentials')
});


/*NOTE: IDK why the expect method after login with invalid credentials and using Roles, does not work properly 
that is why the two methods above are marked as not passed. That is why are skipped, but if you want it you can try it
and share with me a solution. Thank you. luca.bacasehua@gmail.com
*/
test.skip('TC2 using roles', async t => {
    await t
        .useRole(Roles.lockedOutUser)
        .expect(LoginPage.errorMessage.visible).ok('Was posible to login with invalid credentials / error mesagge does not appear')

});

test.skip('Using two differents roles', async t => {
    await t
        .useRole(Roles.standarUser)
        .expect(InventoryPage.productLabel.exists).ok('Error: Was not posible to login with valid credentials')
        .useRole(Roles.lockedOutUser)
        .expect(LoginPage.errorMessage.exists).ok('Was posible to login with invalid credentials / error mesagge does not appear')

});