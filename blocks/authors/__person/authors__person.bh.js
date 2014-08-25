module.exports = function (bh) {
    bh.match('authors__person', function (ctx, json) {
        ctx.content('Concrete author');
    });
};
