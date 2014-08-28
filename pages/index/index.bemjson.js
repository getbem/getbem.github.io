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
                require('./header.bemjson.js'),
                {
                    block: 'container',
                    content: [
                        require('./tools.bemjson.js')
                    ]
                },
                { block: 'ga', ua: 'UA-15345174-10' }
            ]
        }
    ]
};
