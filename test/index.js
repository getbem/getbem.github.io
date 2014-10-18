/* global it */

var Nightmare = require('nightmare');
var join = require('path').join;

it('should have index page', function (done) {
    new Nightmare()
        .goto(join(__dirname, '../dist/index.html'))
        .run(done);
});
