/**
 * Created by tvoloshenko on 7/17/17.
 */
const header = require(`${process.cwd()}/services/pages/header`);
const homepage = require(`${process.cwd()}/services/pages/homepage`);
const authorizationPage = require(`${process.cwd()}/services/pages/authorizationPage`);
const welcombackdata = require(`${process.cwd()}/data/welcombackdata`);


describe('Authorization page (log out)', () => {

    beforeAll(() => browser.get(browser.baseUrl));


    fit('', () => {
        header.loginLink.click();
        authorizationPage.emailInput.sendKeys(welcombackdata.email);
        authorizationPage.passwordInput.sendKeys(welcombackdata.password);
        authorizationPage.loginButton.click();
        //browser.findElement(by.css('btn btn-s round filled dropdown-btn ng-isolate-scope')).click();
        header.getArrow().click();
       // $('.drop-button').click();
        //expect(authorizationPage.title.getText()).toBe(welcombackdata.autorizationPageTitle, 'incorrect page title');
    })
})

