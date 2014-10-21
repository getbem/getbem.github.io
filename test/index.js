/* global it */

var assert = require('assert');
var fs = require('fs');

function exist(path) {
    assert(fs.existsSync('./dist/' + path), path + ' is not exist!');
}

it('should build pages', function () {
    exist('index.html');
    exist('index.css');
    exist('index.js');
    exist('introduction/index.html');
    exist('building/index.html');
    exist('naming/index.html');
});
