module.exports = function (bh) {
    bh.match('header__title', function (ctx) {
        ctx.tag('h1');
    });
};
