var gulp = require('gulp');
var bem = require('gulp-bem');
var plumber = require('gulp-plumber');
var concat = require('gulp-concat');
var del = require('del');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var pack = require('gulp-bem-pack');
var save = require('save-stream');
var glue = require('glue-streams');
var through = require('through2');
var join = require('path').join;
var autoprefixer = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');

function getCssFiles(bemObject) {
    return gulp.src(join(bemObject.path, bemObject.id + '.css'));
}

var levels = [
    'libs/bootstrap/levels/normalize',
    'libs/bootstrap/levels/print',
    'libs/bootstrap/levels/glyphicons',
    'libs/bootstrap/levels/scaffolding',
    'libs/bootstrap/levels/core-css',
    'base',
    'blocks'
];

gulp.task('js', ['clean'], function () {
    return glue.obj(bem.objects(levels), bem.objects('pages'))
        .pipe(bem.src('{bem}.js'))
        .pipe(pack('index.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('css', ['clean'], function () {
    var levelsCss = bem.objects(levels)
        .pipe(bem.src('{bem}.{scss,css}'))
        .pipe(save());

    return bem.objects('pages')
        .pipe(through.obj(function (obj, enc, cb) {
            return glue.obj(levelsCss.load(), getCssFiles(obj))
                .pipe(concat(obj.id + '.css'))
                .pipe(sass())
                .pipe(autoprefixer({
                    browsers: ['last 2 versions'],
                    cascade: false
                }))
                .pipe(minifyCSS())
                .pipe(gulp.dest('./dist'))
                .on('error', cb)
                .on('end', cb);
        }));
});

gulp.task('html', ['clean'], function () {
    var mixins = bem.objects(levels)
        .pipe(bem.src('{bem}.jade'))
        .pipe(save());

    return bem.objects('pages')
        .pipe(bem.src('{bem}.jade'))
        .pipe(through.obj(function (page, enc, cb) {
            return glue.obj(mixins.load(), page)
                .pipe(concat(page))
                .pipe(plumber())
                .pipe(jade({pretty: true}))
                .pipe(gulp.dest('./dist'))
                .on('error', cb)
                .on('end', cb);
        }));
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
