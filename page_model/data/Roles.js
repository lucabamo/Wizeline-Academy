import { Role } from 'testcafe';
import LoginPage from '../pages/LoginPage'
import { DATA } from '../data/Constants'
import InventoryPage from '../pages/InventoryPage'



class Roles{
    constructor(){
        this.standarUser = Role('https://www.saucedemo.com/', async t => {
            await LoginPage.submitLoginForm(DATA.STANDARD_VALID_USER.USERNAME,DATA.STANDARD_VALID_USER.PASSWORD)
        },{ preserveUrl: true });

        this.lockedOutUser = Role('https://www.saucedemo.com/', async t => {
            await LoginPage.submitLoginForm(DATA.LOCKED_OUT_USER.USERNAME,DATA.LOCKED_OUT_USER.PASSWORD)
        },{ preserveUrl: true });

        this.problemUser = Role('https://www.saucedemo.com/', async t => {
            await LoginPage.submitLoginForm(DATA.PROBLEM_USER.USERNAME,DATA.STANDARD_PROBLEM_USERVALID_USER.PASSWORD)
        });

        this.performanceGlitchUser = Role('https://www.saucedemo.com/', async t => {
            await LoginPage.submitLoginForm(DATA.PERFORMANCE_GLITCH_USER.USERNAME,DATA.PERFORMANCE_GLITCH_USER.PASSWORD)
        });
    }
}   
export default new Roles()