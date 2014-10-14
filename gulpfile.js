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

var levels = [
    'js',
    'libs/bootstrap/levels/*',
    'base',
    'blocks',
    'pages'
];

var tree;
gulp.task('tree', function () {
    tree = bem.objects(levels).pipe(bem.deps()).pipe(bem.tree());
});

gulp.task('js', ['clean'], function () {
    function buildJs(page) {
        return tree.deps('pages/' + page.id)
            .pipe(bem.src('{bem}.js'))
            .pipe(pack(page.id + '.js'))
            .pipe(uglify())
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('pages').map(buildJs);
});

gulp.task('css', ['clean'], function () {
    function buildCss(page) {
        return tree.deps('pages/' + page.id)
            .pipe(bem.src('{bem}.{scss,css}'))
            .pipe(concat(page.id + '.css'))
            .pipe(sass())
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('pages').map(buildCss);
});

gulp.task('html', ['clean'], function () {
    function buildHtml(page) {
        return tree.deps('pages/' + page.id)
            .pipe(bem.src('{bem}.jade'))
            .pipe(concat({
                path: page.path + '/' + page.id + '.jade',
                base: page.path
            }))
            .pipe(jade({pretty: true}))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('pages').map(buildHtml);
});

gulp.task('cname', ['clean'], function () {
    return gulp.src('CNAME').pipe(gulp.dest('dist'));
});

gulp.task('assets', ['clean'], function () {
    return gulp.src('assets/**').pipe(gulp.dest('dist'));
});

gulp.task('clean', ['tree'], function (cb) {
    del(['./dist'], cb);
});

gulp.task('build', ['clean', 'html', 'css', 'js', 'assets', 'cname']);

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist', ignore: ['libs'] }, done);
});

var watch = require('gulp-watch');
gulp.task('watch', ['build'], function() {
    return watch(levels.map(function (l) { return l + '/**/*.{js,css,jade}'; }), function () {
        gulp.start('build');
    });
});

gulp.task('default', ['watch']);
