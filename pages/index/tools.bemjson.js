module.exports = {
    block: 'grid',
    content: [
        { elem: 'col', mods: { '1-4': 'sm', '1': true,  } },
        { elem: 'col', mods: { '1-4': 'sm', '1': true },
            content: {
                block: 'part',
                name: 'gulp-bem',
                description: 'building tool',
                href: 'https://github.com/floatdrop/gulp-bem',
                image: 'img/gulp.png'
            }
        },
        { elem: 'col', mods: { '1-4': 'sm', '1': true },
            content: {
                block: 'part',
                name: 'bem-bootstrap',
                description: 'layer with bem blocks',
                image: 'img/bootstrap.png',
                href: 'https://github.com/matmuchrapna/bem-bootstrap',
                inProgress: true
            }
        },
        { elem: 'col', mods: { '1-4': 'sm', '1': true } }
    ]
};
