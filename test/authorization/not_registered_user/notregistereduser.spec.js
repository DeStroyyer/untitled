const header = require(`${process.cwd()}/services/pages/header`);
const homepage = require(`${process.cwd()}/services/pages/homepage`);
const authorizationPage = require(`${process.cwd()}/services/pages/authorizationPage`);
const welcombackdata = require(`${process.cwd()}/data/welcombackdata`);

describe('Authorization page (N`ot registered user)', () => {

    beforeAll(() => {
        browser.get(browser.baseUrl);
        browser.ignoreSynchronization = false;
    });

    // it('it is a homepage!!!!!', () => {
    //     expect(homepage.heading.getText()).toContain(welcombackdata.homePageHeading);
    // })
    // it('', () => {
    //     header.loginLink.click();
    //     expect(authorizationPage.title.getText()).toBe(welcombackdata.autorizationPageTitle, 'incorrect page title');
    // })
    //authorizationPage.login('ssls.automation+5@gmail.com', '123456');
    it('', () => {
        // browser.sleep(5000);
        header.loginLink.click();
        authorizationPage.emailInput.sendKeys(welcombackdata.incorrectEmail);
        authorizationPage.passwordInput.sendKeys(welcombackdata.incorrectPassword);
        authorizationPage.iconEye.click();
        //expect(authorizationPage.getPasswordFieldType()).toBe(welcombackdata.expectedPasswordFieldType);

        authorizationPage.loginButton.click();
        browser.sleep(1000);
        expect(header.getUserIncorrectEmailmessage().getText()).toBe(welcombackdata.incorrectLoginMessage);

    })

})