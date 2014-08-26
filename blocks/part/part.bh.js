module.exports = function (bh) {
    bh.match('part', function (ctx, json) {

        var content = [
            { block: 'part', elem: 'image', image: json.image, mix: [{ block: 'part', elem: 'image' }, { block: 'centered' }]},
            { block: 'part', elem: 'name', content: json.name, href: json.href },
            { block: 'part', elem: 'description', content: json.description }
        ];

        if (json.inProgress) {
            content[0].mix.push({ block: 'in-progress' });
        }

        if (json.href) {
            content = {
                block: 'link',
                url: json.href,
                content: content
            };
        }

        ctx.content(content);
    });
};
