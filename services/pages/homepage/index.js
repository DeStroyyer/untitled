class HomePage {
    constructor(){
        this.heading= $('H1')
    //    this.arrowButton =$('btn.dropdown-btn')
       // this.arrowButton =browser.findElement(by.xpath('//*[@id='ng-app']/body/div[1]/header/div[2]/div[2]/div[1]/div/button'))

    }

    getNotEmailMessage(){
        return element(by.css('.tooltip-text'))
    }

    // getArrowDropdown(){
    //     return element(by.css('.dropdown ng-isolate-scope'))
    // }
}

module.exports = new HomePage();