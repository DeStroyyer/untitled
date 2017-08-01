/**
 * Created by tvoloshenko on 7/17/17.
 */
const header = require(`${process.cwd()}/services/pages/header`);
const homepage = require(`${process.cwd()}/services/pages/homepage`);
const authorizationPage = require(`${process.cwd()}/services/pages/authorizationPage`);
const welcombackdata = require(`${process.cwd()}/data/welcombackdata`);


describe('Authorization page (Welcome back!)', () => {

    beforeAll(() => browser.get(browser.baseUrl));

    it('it is a homepage!!!!!', () => {
        expect(homepage.heading.getText()).toContain(welcombackdata.homePageHeading);
    })
    it('', () => {
        header.loginLink.click();
        expect(authorizationPage.title.getText()).toBe(welcombackdata.autorizationPageTitle, 'incorrect page title');
    })

    it('', () => {
     //   authorizationPage.loginButton.click();
    //    expect(homepage.getNotEmailMessage().getText()).toBe(welcombackdata.NotEmailmessagetext);

    })

})