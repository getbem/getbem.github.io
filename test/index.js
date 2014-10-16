/* global describe, it */

var Nightmare = require('nightmare');

describe('index page', function () {
    it('should have global jQuery', function (done) {
        new Nightmare()
            .goto('./dist/index.html')
            .evaluate(function() {
                /* global jQuery */
                return jQuery;
            }, function (res) {
                if (res === null) {
                    return done('jQuery is not found on page');
                }
                done();
            })
            .run();
    });
});
