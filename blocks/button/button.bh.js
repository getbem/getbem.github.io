module.exports = function (bh) {
    bh.match('button', function (ctx, json) {
        ctx.tag('a')
            .attr('href', json.href);
    });
};
