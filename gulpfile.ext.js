var gulp = require('gulp');
var buildBranch = require('buildbranch');

gulp.task('watch', ['build'], function() {
    return gulp.watch([
        '{blocks,pages}/**/*.deps.js',
        '{blocks,pages}/**/*.css',
        '{blocks,pages}/**/*.jade'
    ], ['build']);
});

gulp.task('gh', ['build'], function(done) {
    buildBranch({ folder: 'dist' }, done);
});

gulp.task('default', ['watch']);
