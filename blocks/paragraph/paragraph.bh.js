module.exports = function (bh) {
    bh.match('paragraph', function (ctx, json) {
        ctx.tag('p');
    });
};
