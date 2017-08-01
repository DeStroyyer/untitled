class Header {
    constructor(){
        this.loginLink= $('a[href="/authorize"]')
    }

    getUserEmailButton(email){
        return element(by.cssContainingText('a', email))
    }

    getUserIncorrectEmailmessage(){
        return element(by.css('.noty_text'))
    }
}

module.exports = new Header();


