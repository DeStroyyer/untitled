/**
 * Created by tvoloshenko on 7/17/17.
 */
// welcomback.spec.js
describe('Protractor Demo App', function() {
    it('should have a title', function() {
        browser.get('http://juliemr.github.io/protractor-demo/');

        expect(browser.getTitle()).toEqual('Super Calculator');
    });
});