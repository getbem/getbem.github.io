module.exports = function (bh) {
    bh.match('header__description', function (ctx) {
        ctx.tag('p');
    });
};
