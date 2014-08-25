module.exports = function (bh) {
    bh.match('part__unknown', function (ctx, json) {
        ctx.content('Comping soon');
    });
};
