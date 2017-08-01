class Header {
    constructor(){
        this.loginLink= $('a[href="/authorize"]')
       // this.arrowButton =$('btn btn-s round filled dropdown-btn ng-isolate-scope')
    }

    getUserEmailButton(email){
        return element(by.cssContainingText('a', email))
    }

    getArrow(){
        return element(by.css('btn btn-s round filled dropdown-btn ng-isolate-scope'))
    }
    getUserIncorrectEmailmessage(){
        return element(by.css('.noty_text'))
    }
}

module.exports = new Header();


