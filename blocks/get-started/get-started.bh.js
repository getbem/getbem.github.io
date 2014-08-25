module.exports = function (bh) {
    bh.match('get-started', function (ctx, json) {
        ctx.content({
            block: 'button',
            content: 'Get started',
            href: 'https://github.com/matmuchrapna/gulp-bem-stub'
        });
    });
};
