var through = require('through2');
var basename = require('path').basename;
var browserify = require('browserify');

function defaultName(path) {
    return basename(path).split('.')[0];
}

module.exports = function (options) {
    options = options || {};
    options.ignoreMissing = true;

    options.naming = options.naming || defaultName;

    var b = browserify(options);

    var depses = {};
    var depsFiller = through.obj(function (row, enc, next) {
        Object.keys(row.deps).forEach(function (key) {
            if (row.deps[key] === undefined) {
                row.deps[key] = depses[key];
            }
        });
        var name = options.naming(row.file);
        depses[name] = row.file;
        next(null, row);
    });
    b.pipeline.get('deps').push(depsFiller);

    b.on('reset', function () {
        depses = {};
    });

    return b;
};
