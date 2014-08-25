var gulp = require('gulp');
var bem = require('gulp-bem');
var bh = require('gulp-bh');
var concat = require('gulp-concat');
var del = require('del');
var buildBranch = require('buildbranch');

var levels = [
    'libs/base',
    'libs/google-analytics',
    'blocks',
    'pages'
];

gulp.task('css', ['clean'], function () {
    return bem.objects(levels).pipe(bem.src('{bem}.css'))
        .pipe(concat('index.css'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('html', ['clean'], function () {
    delete require.cache[require.resolve('./pages/index/index.bemjson.js')];
    return bem.objects(levels).pipe(bem.src('{bem}.bh.js'))
        .pipe(bh(require('./pages/index/index.bemjson.js'), 'index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('cname', ['clean'], function () {
    return gulp.src('CNAME').pipe(gulp.dest('dist'));
});

gulp.task('assets', ['clean'], function () {
    return gulp.src('assets/**').pipe(gulp.dest('dist'));
});

gulp.task('build', ['clean', 'html', 'css', 'assets', 'cname']);

gulp.task('clean', function (cb) {
    del(['./dist'], cb);
});

gulp.task('watch', ['build'], function() {
    return gulp.watch(['**/*.css', '**/*.bh.js', '**/*.bemjson.js'], ['build']);
});

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist' }, done);
});

gulp.task('default', ['watch']);
