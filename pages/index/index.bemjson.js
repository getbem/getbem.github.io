module.exports = {
    block: 'page',
    content: [
        {
            elem: 'head',
            content: [
                { block: 'meta', attrs: { charset: 'utf-8' }},
                { block: 'meta', attrs: { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' }},
                {
                    elem: 'title',
                    content: 'Get BEM',
                },
                { block: 'meta', attrs: { name: 'keywords', content: 'BEM, gulp, yeoman, bootstrap' }},
                { block: 'meta', attrs: { name: 'description', content: '' }},

                { block: 'metalink', url: '/favicon.png', attrs: { rel: 'icon', type: 'image/x-icon' }},
                { block: 'metalink', url: '/favicon.png', attrs: { rel: 'shortcut icon', type: 'image/x-icon' }},

                { block: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
                { block: 'css', url: 'index.css' }
            ]
        },
        {
            elem: 'body',
            content: [
                {
                    block: 'header',
                    content: [
                        { elem: 'title', content: 'BEM!' },
                        { elem: 'description', content: 'Block Element Modificator &mdash; code sharing, a live style guide, scalability, faster development.' }
                    ]
                },
                {
                    block: 'four-row',
                    first: { block: 'part', elem: 'gulp-bem' },
                    second: { block: 'part', elem: 'bem-bootstrap', mix: { block: 'opaque' } },
                    third: { block: 'part', elem: 'unknown', mix: { block: 'opaque' } },
                    four: { block: 'part', elem: 'unknown', mix: { block: 'opaque' } }
                },
                {
                    block: 'get-started'
                },
                {
                    block: 'gulp-bem'
                },
                {
                    block: 'authors',
                    content: [
                        { elem: 'person',
                            name: 'Vsevolod Strukchinsky',
                            avatar: 'https://avatars2.githubusercontent.com/u/365089?v=2&s=460',
                            email: 'floatdrop@gmail.com' },
                        { elem: 'person',
                            name: 'Vladimir Starkov',
                            avatar: 'https://avatars0.githubusercontent.com/u/559321?v=2&s=460' },
                    ]
                }
            ]
        }
    ]
};
