var gulp = require('gulp');
var buildBranch = require('buildbranch');
var watch = require('gulp-watch');

gulp.task('watch', ['build'], function() {
    return watch([
        '{blocks,pages}/**/*.deps.js',
        '{blocks,pages}/**/*.css',
        '{blocks,pages}/**/*.jade',
        '{blocks,pages}/**/*.md'
    ], function (files) {
        gulp.start('build');
    });
});

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist', ignore: ['libs'] }, done);
});

gulp.task('default', ['watch']);
