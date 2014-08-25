module.exports = function (bh) {
    bh.match('part__bem-bootstrap', function (ctx, json) {
        ctx.content('Bootstrap layer');
    });
};
