/* global describe, it */

var Nightmare = require('nightmare');
var join = require('path').join;

describe('index page', function () {
    it('should have global jQuery', function (done) {
        new Nightmare()
            .goto(join(__dirname, '../dist/index.html'))
            .evaluate(function() {
                /* global jQuery */
                return jQuery;
            }, function (res) {
                if (res === null) {
                    return done('jQuery is not found on page');
                }
                done();
            })
            .run(function (err) {
                if (err) { done(err); }
            });
    });

    it('should have link to introduction', function (done) {
        new Nightmare()
            .goto(join(__dirname, '../dist/index.html'))
            .click('.nav__link[href="introduction.html"]')
            .run(function (err) {
                if (err) { return done(err); }
                done();
            });
    });
});
