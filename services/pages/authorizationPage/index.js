class AutorizationPage {
    constructor(){
        this.title=$('.page-title')
        this.emailInput=$('[name="email"]')
        this.passwordInput=$('[name="password"]')
        this.loginButton=element(by.cssContainingText('button', 'Login'))
        this.iconEye=$('.icon-eye')

    }

    login (email, password){
        this.emailInput.sendKeys(email);
        this.passwordInput.sendKeys(password);
        this.loginButton.click();
    }

    getPasswordFieldType(){
        return this.passwordInput.getAttribute('type')
    }
}

module.exports = new AutorizationPage();