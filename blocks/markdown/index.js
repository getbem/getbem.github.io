/* global it */

var watch = require('..');
require('should');

it('watch should throw on invalid glob argument', function () {
    (function() { watch(); }).should.throw();
    (function() { watch(1); }).should.throw();
    (function() { watch({}); }).should.throw();
});
