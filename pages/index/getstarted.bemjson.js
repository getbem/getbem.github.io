var marked = require('marked');

module.exports = {
    block: 'grid',
    content: [
        { elem: 'col', mods: { '1': true }, content: [
            { block: 'step', content: [
                { elem: 'heading', content: '1. BEM naming' },
                { elem: 'paragraph', content: marked(
                    'To start using BEM you only need to know about [BEM naming conventions](http://cssguidelin.es/#bem-like-naming). We recommend using `_` and `__` as delimeters for Elements and Modificators.\n\n' +
                    'After you have Blocks and Elements on your page, you can reorganize your CSS files.'
                ) }
            ] },
            { block: 'step', content: [
                { elem: 'heading', content: '2. Layers' },
                { elem: 'paragraph', content: marked(
                    'We grouping Blocks into directories, that called `Layers`. Because of Blocks are independent inside one Layer, CSS files in Layer directory can be concatinated without ordering.'
                ) }
            ] },
            { block: 'step', content: [
                { elem: 'heading', content: '3. Build' },
                { elem: 'paragraph', content: marked(
                    'Building static site with BEM is easy &mdash; you just need to concatinate CSS files with respect of layers ordering. Check out how this site is builded for example:'
                ) }
            ] },
        ] },
    ]
};
