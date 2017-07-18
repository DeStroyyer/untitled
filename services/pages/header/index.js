class Header {
    constructor(){
        this.loginLink= $('a[href="/authorize"]')
    }

    getUserEmailButton(email){
        return element(by.cssContainingText('a', email))
    }
}

module.exports = new Header();