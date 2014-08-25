module.exports = function (bh) {
    bh.match('part__name', function (ctx, json) {
        ctx.tag('h2');
    });
};
