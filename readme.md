# [Get BEM!](https://getbem.com)

> If you interested in writing articles or helping with site — feel free to make pull-requests or [creating issues](https://github.com/floatdrop/getbem.com/issues) with discussions.

This repository contains sources of [getbem.com](https://getbem.com) site.

## Quick start

Clone this repository:

```bash
git clone https://github.com/getbem/getbem.com.git
cd getbem.com
```

Build site with three simple steps:

```bash
npm i
bower i
gulp build
```

Open `dist/index.html` file:

```bash
open dist/index.html
```

## Build steps explained

To build this site we are using [gulpjs](http://gulpjs.com/) — which is extremely fast and extensible build system. We recommend to read the [docs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) or watch [Gulp — The Basics](http://www.youtube.com/playlist?list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm) turtorials.

We will look at main parts of [gulpfile.js](gulpfile.js), which are:

 * [CSS](#css)
 * [HTML](#html)
 * [JavaScript](#javascript)

These task was intentionally simplified to keep things small.

Before digging in to tasks, we will take short introduction in [gulp-bem](https://github.com/floatdrop/gulp-bem) which is used in all  tasks.

### gulp-bem

If you familar with [building](http://getbem.com/building.html) of BEM projects — then you probably know, that BEM projects have certain structure: file with CSS for blocks will be in `block` folder with name `{block}.css` (where `{block}` is placeholder for current block name). All blocks are grouped to levels — folders with blocks.

With this structure is not clear in which order you should concatinate blocks and how get specific files from block (element or modifier) folder. To make it easy - we wrote [gulp-bem](https://github.com/floatdrop/gulp-bem).

Main object, that powers gulp-bem is [bem-object](https://github.com/floatdrop/bem-object). You can read readme in bem-object repository, but in short — it represents directory with files (or single file for modifier with value case). To get all bem-object from level you can do `bem.object('level')` - it will return `Stream` of bem-objects.

gulp-bem also provides `*.deps.js` files support. They are used to define dependencies between blocks. You can read [gulp-bem-specs](https://github.com/floatdrop/gulp-bem-specs) with explanations.

When talking about dependencies - it is always good to imagine dependencies tree. gulp-bem provides a way to construct those trees and query them for linearized dependencies:

```js
var tree = bem.objects(levels)
    .pipe(bem.deps())
    .pipe(bem.tree());
```

To construct tree of dependencies - you need to read `deps` file - we get you covered, and `bem.deps()` reads file that named `{bem}.deps.js` from bem-object (where `{bem}` is BEM identificator for current bem-object).

After tree is constructed — you can query dependencies of block: `tree.deps('block')` which return `Stream` of bem-objects.

### CSS

To build CSS you don't need magic — it just concatination of `{bem}.css` files in right order:

```js
tree.deps('pages/index')
    .pipe(bem.src('{bem}.css'))
    .pipe(concat(page.id + '.css'))
    .pipe(gulp.dest('./dist'));
```

But, if you want to get CSS files for every page (which it self is a block), you need to get all `pages` objects and run building for each of them:

```js
gulp.task('css', ['clean'], function () {
    function buildCss(page) {
        return tree.deps('pages/' + page.id)
            .pipe(bem.src('{bem}.css'))
            .pipe(concat(page.id + '.css'))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('pages').map(buildCss);
});
```

### HTML

This is tricky part of [getbem.com](https://getbem.com). At first we try'd to use [bh](https://github.com/bem/bh) as templating language — but quickly realize, that it is too complex to achieve fast development and quick prototyping of site.

So we used [Jade](jade-lang.com) and it's [mixins](http://jade-lang.com/reference/mixins/) to achieve reusablility of templates from blocks.

In short, block can contain `{bem}.jade` file with mixin:

```jade
mixin author(avatar, name, link)
  .author
    a.author__link(href=link)
      img.img.img_circle.author__photo(src=avatar)
      span.author__name
        = name
```

After you get this code in main Jade template, you can call it:

```jade
+author('some', 'sweet', 'parameters')
```

We just get addicted to Jade after some time with it. Here is part of task, that compiles Jade template for `index` page:

```js
return tree.deps('pages/index')
    .pipe(bem.src('{bem}.jade'))
    .pipe(concat({
        path: 'index.jade',
        base: 'pages/index'
    }))
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./dist'));
```

Tricky part is get right `base` path for concatinated file:

```js
concat({
    path: 'index.jade',
    base: 'pages/index'
})
```

If you miss `base` property, then `extend` and `include` in Jade template will not work.

Again, to build all pages with Jade, we using this code:

```js
gulp.task('html', ['clean'], function () {
    function buildHtml(page) {
        return tree.deps('pages/' + page.id)
            .pipe(bem.src('{bem}.jade'))
            .pipe(concat({
                path: page.path + '/' + page.id + '.jade',
                base: page.path
            }))
            .pipe(jade({pretty: true}))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('pages').map(buildHtml);
});
```

### JavaScript

Building JavaScript is very hard task to do. We used our wrapper around [browserify](browserify.org) — [gulp-bem-pack](https://github.com/floatdrop/gulp-bem-pack). It converts CommonJS modules that can `require` modules from BEM Levels — which is kind of equivalent of cascading in CSS.

Task to do it is quite short:

```js
gulp.task('js', ['clean'], function () {
    return tree.deps('blocks/page')
        .pipe(bem.src('{bem}.js'))
        .pipe(pack('index.js'))
        .pipe(gulp.dest('./dist'));
});
```

We are looking forward to use [Duo](http://duojs.org/), as soon as resolving parts will be configurable.

##### MIT License
