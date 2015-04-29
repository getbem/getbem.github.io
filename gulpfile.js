var gulp = require('gulp');
var bem = require('gulp-bem');
var concat = require('gulp-concat');
var del = require('del');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var pack = require('gulp-bem-pack');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var buildBranch = require('buildbranch');
var each = require('each-done');
var rename = require('gulp-rename');

var levels = [
    'levels/js',
    'libs/bootstrap/levels/normalize',
    'libs/bootstrap/levels/print',
    'libs/bootstrap/levels/glyphicons',
    'libs/bootstrap/levels/scaffolding',
    'libs/bootstrap/levels/core',
    'libs/bootstrap/levels/components',
    'libs/bootstrap/levels/js',
    'levels/base',
    'levels/blocks',
    'levels/pages'
];

var paths = {
    '404': '404.html',
    'index': 'index.html',
    'introduction': 'introduction/index.html',
    'naming': 'naming/index.html',
    'faq': 'faq/index.html'
};


var pages = Object.keys(paths);

var tree = bem(levels);

gulp.task('js', function () {
    return tree.deps('levels/pages/index')
        .pipe(bem.src('{bem}.js'))
        .pipe(pack('index.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('uglify', ['js'], function () {
    return gulp.src('dist/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

gulp.task('css', function (cb) {
    each(pages, function (page) {
        return tree.deps('levels/pages/' + page)
            .pipe(bem.src('{bem}.{css,scss}'))
            .pipe(concat(page + '.css'))
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('./dist'));
    }, cb);
});

gulp.task('html', function (cb) {
    each(pages, function (page) {
        return tree.deps('levels/pages/' + page)
            .pipe(bem.src('{bem}.jade'))
            .pipe(concat({
                path: 'levels/pages/' + page + '/index.jade',
                base: 'levels/pages/' + page
            }))
            .pipe(jade({pretty: true}))
            .pipe(rename(paths[page]))
            .pipe(gulp.dest('dist'));
    }, cb);
});

gulp.task('cname', function () {
    return gulp.src('CNAME').pipe(gulp.dest('dist'));
});

gulp.task('assets', function () {
    return gulp.src('assets/**').pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('build', ['html', 'css', 'js', 'assets', 'cname']);

gulp.task('production', ['build', 'uglify']);

gulp.task('gh', ['production'], function(done) {
    buildBranch({ folder: 'dist', ignore: ['libs'] }, done);
});

gulp.task('express', function() {
    var express = require('express');
    var app = express();
    app.use(express.static('dist'));
    app.listen(4000);
    console.log('Server is running on http://localhost:4000');
});

var watch = require('gulp-watch');
gulp.task('watch', ['express', 'build'], function() {
    watch('assets/**/*', function () { gulp.start('assets'); });
    watch('levels/**/*.js', function () { gulp.start('js'); });
    watch('levels/**/*.{scss,css}', function () { gulp.start('css'); });
    watch('levels/**/*.jade', function () { gulp.start('html'); });
});

gulp.task('default', ['watch']);
