module.exports = function (bh) {
    bh.match('part__image', function (ctx, json) {
        ctx.attr('style', 'background-image: url(\'' + json.image + '\')');
    });
};
