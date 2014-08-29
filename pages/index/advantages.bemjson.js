module.exports = {
    block: 'grid',
    attrs: {
        style: 'text-align: center;'
    },
    content: [
        {
            elem: 'col', mods: { '1-3': 'sm', '1': true },
            content: [
                { block: 'advantage', content: [
                    { elem: 'head', content: 'Easy' },
                    { elem: 'description', content: 'To use BEM you literally do not need nothing besides BEM&nbsp;naming.' },
                ] }
            ]
        },
        {
            elem: 'col', mods: { '1-3': 'sm', '1': true },
            content: [
                { block: 'advantage', content: [
                    { elem: 'head', content: 'Modular' },
                    { elem: 'description', content: 'Independent blocks and css selectors plus layer system makes your code reusable and modular.' },
                ] }
            ]
        },
        {
            elem: 'col', mods: { '1-3': 'sm', '1': true },
            content: [
                { block: 'advantage', content: [
                    { elem: 'head', content: 'Flexible' },
                    { elem: 'description', content: 'Methodology and tools, that can be recomposed and configured in the way you like BEM.' },
                ] }
            ]
        }
    ]
};
