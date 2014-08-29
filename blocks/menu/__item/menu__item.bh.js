module.exports = function (bh) {
    bh.match('menu__item', function (ctx, json) {
        ctx.tag('a')
            .attr('href', json.url);
    });
};
