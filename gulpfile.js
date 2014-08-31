var gulp = require('gulp');
var bem = require('gulp-bem');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var del = require('del');
var jade = require('gulp-jade');
var pack = require('gulp-bem-pack');

var levels = [
    'libs/pure-base',
    'libs/pure-grids',
    'blocks',
    'pages'
];

gulp.task('js', ['clean'], function () {
    return bem.objects(levels)
        .pipe(bem.src('{bem}.js'))
        .pipe(pack('index.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', ['clean'], function () {
    return bem.objects(levels)
        .pipe(bem.src('{bem}.css'))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', ['clean'], function () {
    return bem.objects(levels)
        .pipe(bem.src('{bem}.jade'))
        .pipe(concat('index.jade'))
        .pipe(plumber())
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('cname', ['clean'], function () {
    return gulp.src('CNAME').pipe(gulp.dest('dist'));
});

gulp.task('assets', ['clean'], function () {
    return gulp.src('assets/**').pipe(gulp.dest('dist'));
});

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('build', ['clean', 'html', 'css', 'js', 'assets', 'cname']);

/* Some external tasks */
require('./gulpfile.ext.js');
