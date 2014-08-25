module.exports = function (bh) {
    bh.match('four-row', function (ctx, json) {
        ctx.content([
            { elem: 'col', content: json.first },
            { elem: 'col', content: json.second },
            { elem: 'col', content: json.third },
            { elem: 'col', content: json.four }
        ]);
    });
};
