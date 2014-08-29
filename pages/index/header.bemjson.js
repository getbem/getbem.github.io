module.exports = {
    block: 'header',
    content: [
        {
            block: 'image',
            url: 'img/b.svg',
            attrs: {
                width: 250,
                style: 'display: inline-block;'
            }
        },
        { elem: 'description',
            content: 'Block Element Modificator is methodology, that helps you achieve reusable components and code sharing in the front-end' },
        { block: 'button',
            attrs: {
                style: 'margin-top: 30px',
                href: '#get-started'
            },
            content: 'Get started'
        }
    ]
};
