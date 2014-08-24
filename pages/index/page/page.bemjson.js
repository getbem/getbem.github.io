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
                    content: 'Gulp BEM is awesome!',
                },
                { block: 'meta', attrs: { name: 'keywords', content: '' }},
                { block: 'meta', attrs: { name: 'description', content: '' }},

                { block: 'metalink', url: '/favicon.ico', attrs: { rel: 'icon', type: 'image/x-icon' }},
                { block: 'metalink', url: '/favicon.ico', attrs: { rel: 'shortcut icon', type: 'image/x-icon' }},

                { block: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' }},
                { block: 'css', url: 'index.css' }
            ]
        },
        {
            elem: 'body',
            content: [
                {
                    block: 'image',
                    url: 'http://s.likes-media.com/img/434dd676201bb7248f9817c1e761719e.600x.jpg'
                },
                {
                    block: 'ga',
                    ua: 'UA-15345174-10'
                }
            ]
        }
    ]
};
