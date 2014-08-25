module.exports = function (bh) {
    bh.match('part__gulp-bem', function (ctx, json) {
        ctx.content('Build with gulpjs');
    });
};
