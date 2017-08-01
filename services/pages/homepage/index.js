class HomePage {
    constructor(){
        this.heading= $('H1')
    }

    getNotEmailMessage(){
        return element(by.css('.tooltip-text'))
    }
}

module.exports = new HomePage();