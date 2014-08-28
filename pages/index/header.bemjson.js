module.exports = {
    block: 'header',
    content: [
        { elem: 'title',
            content: {
                block: 'image',
                url: 'img/b.svg',
                attrs: { width: 250 },
                mix: { block: 'centered', mods: {'margin': true} }
            }
        },
        { elem: 'description',
            content: 'Block Element Modificator &mdash; scalability, faster development, code sharing for the front-end' },
        { block: 'get-started',
            mix: { block: 'centered', mods: {'textalign': true} } },
    ]
};
