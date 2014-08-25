module.exports = function (bh) {
    bh.match('part__description', function (ctx, json) {
        ctx.tag('p');
    });
};
