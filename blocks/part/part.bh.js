module.exports = function (bh) {
    bh.match('part', function (ctx, json) {
        ctx.content([
            { block: 'image', url: json.image, mix: [{ block: 'part', elem: 'image' }, { block: 'centered' }]},
            { elem: 'name', content: json.name },
            { elem: 'description', content: json.description }
        ]);
    });
};
