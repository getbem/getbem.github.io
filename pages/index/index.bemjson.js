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
                    content: 'BEM &mdash; Block Element Modificator',
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
                        { elem: 'title', content: { block: 'image', url: 'img/b.svg', attrs: { width: 250 }} },
                        { elem: 'description', content: 'Block Element Modificator &mdash; code sharing, scalability, faster development' },
                        { block: 'get-started', mix: { block: 'centered', mods: {'textalign': true} } },
                    ]
                },
                {
                    block: 'four-row',

                    first: { content: '&nbsp;' },

                    second: { block: 'part',
                        name: 'gulp-bem',
                        description: 'building tool',
                        href: 'https://github.com/floatdrop/gulp-bem',
                        image: 'img/gulp.png' },

                    third: { block: 'part',
                        name: 'bem-bootstrap',
                        description: 'layer with bem blocks',
                        image: 'img/bootstrap.png',
                        href: 'https://github.com/matmuchrapna/bem-bootstrap',
                        inProgress: true
                    }
                },
                // {
                //     block: 'gulp-bem',
                //     content: [
                //         { block: 'paragraph', content: 'This project aimed to help you get on BEM methodology and provide build tools.' }
                //     ]
                // },
                // {
                //     block: 'authors',
                //     content: [
                //         { elem: 'person',
                //             name: 'Vsevolod Strukchinsky',
                //             avatar: 'https://avatars2.githubusercontent.com/u/365089?v=2&s=460',
                //             email: 'floatdrop@gmail.com' },
                //         { elem: 'person',
                //             name: 'Vladimir Starkov',
                //             avatar: 'https://avatars0.githubusercontent.com/u/559321?v=2&s=460' },
                //     ]
                // }
            ]
        }
    ]
};
