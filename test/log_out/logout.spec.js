/**
 * Created by tvoloshenko on 7/17/17.
 */
const header = require(`${process.cwd()}/services/pages/header`);
const homepage = require(`${process.cwd()}/services/pages/homepage`);
const authorizationPage = require(`${process.cwd()}/services/pages/authorizationPage`);
const welcombackdata = require(`${process.cwd()}/data/welcombackdata`);


describe('Authorization page (log out)', () => {

    beforeAll(() => browser.get(browser.baseUrl));


    it('', () => {
        header.loginLink.click();
        authorizationPage.emailInput.sendKeys(welcombackdata.email);
        authorizationPage.passwordInput.sendKeys(welcombackdata.password);
        authorizationPage.loginButton.click();

        //header.getArrow().click();
        //expect(authorizationPage.title.getText()).toBe(welcombackdata.autorizationPageTitle, 'incorrect page title');
    })
})

