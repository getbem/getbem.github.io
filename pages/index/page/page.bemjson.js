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
                    block: 'logo',
                    content: [
                        {
                            block: 'image',
                            mix: [{ block: 'logo', elem: 'bem' }],
                            url: '//bem.info/m/_/20zuV2gLiyoaqrHv9LoBRTmB0Ow.svg'
                        },
                        {
                            block: 'image',
                            mix: [{ block: 'logo', elem: 'gulp' }],
                            url: '//raw2.github.com/gulpjs/artwork/master/gulp-2x.png'
                        }
                    ]
                },
                {
                    block: 'tagline',
                    content: 'What happens when two powerfull technology meet each other? Awesomness!'
                },
                {
                    block: 'link',
                    url: 'https://github.com/floatdrop/gulp-bem/',
                    content: 'Stay tuned'
                }
            ]
        }
    ]
};
