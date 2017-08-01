const header = require(`${process.cwd()}/services/pages/header`);
const homepage = require(`${process.cwd()}/services/pages/homepage`);
const authorizationPage = require(`${process.cwd()}/services/pages/authorizationPage`);
const welcombackdata = require(`${process.cwd()}/data/welcombackdata`);

describe('Authorization page (Invalid email)', () => {

    beforeAll(() => browser.get(browser.baseUrl));

    it('it is a homepage!!!!!', () => {
        expect(homepage.heading.getText()).toContain(welcombackdata.homePageHeading);
    })
    it('', () => {
        header.loginLink.click();
        expect(authorizationPage.title.getText()).toBe(welcombackdata.autorizationPageTitle, 'incorrect page title');
    })
    //authorizationPage.login('ssls.automation+5@gmail.com', '123456');
    it('', () => {
        authorizationPage.emailInput.sendKeys(welcombackdata.incorrectEmail);
        authorizationPage.passwordInput.sendKeys(welcombackdata.password);
        authorizationPage.iconEye.click();
        expect(authorizationPage.getPasswordFieldType()).toBe(welcombackdata.expectedPasswordFieldType);
    })

    it('', () => {

       // expect(homepage.getNotEmailMessage().getText).toBe(welcombackdata.getNotEmailMessage());

    })

})