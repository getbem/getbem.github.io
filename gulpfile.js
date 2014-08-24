var gulp = require('gulp');
var bem = require('gulp-bem');
var bh = require('gulp-bh');
var concat = require('gulp-concat');
var del = require('del');
var debug = require('gulp-bem-debug');
var argv = require('yargs').alias('d', 'debug').boolean('d').argv;
var buildBranch = require('buildbranch');

var deps;
var levels = [
    'libs/base',
    'blocks',
    'pages/index'
];

gulp.task('deps', function (done) {
    var tree = bem.objects(levels)
        .pipe(bem.deps())
        .pipe(bem.tree());

    deps = tree.deps('pages/index/page');

    if (argv.debug) { deps.pipe(debug()); }

    done();
});

gulp.task('css', ['deps', 'clean'], function () {
    return deps.src('{bem}.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', ['deps', 'clean'], function () {
    return deps.src('{bem}.bh.js')
        .pipe(bh(require('./pages/index/page/page.bemjson.js'), 'index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['clean', 'html', 'css']);

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('watch', ['build'], function() {
    return gulp.watch(['**/*.css', '**/*.bemjson.js'], ['build']);
});

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist' }, done);
});

gulp.task('default', ['watch']);
