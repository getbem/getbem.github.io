# [Get BEM!](http://getbem.com)

[![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

> If you are interested in writing articles or helping with the site — feel free to make pull-requests or [create issues](https://github.com/floatdrop/getbem.com/issues) with discussions.

This repository contains the source for the [getbem.com](http://getbem.com) site.

## Quick start

Install `bower` and `gulp` executables, if you haven't already:

```bash
npm i bower gulp -g
```

Clone this repository and install dependencies:

```bash
git clone https://github.com/getbem/getbem.com.git
cd getbem.com
npm i
bower i
```

Build site:

```bash
gulp build
```

Open `dist/index.html` file:

```bash
open dist/index.html
```

Windows system have no `open` command, so try to open the compiled `dist/index.html` file with your favourite browser.

## GetBem’s build steps explained

To build this site we are using [gulpjs](http://gulpjs.com/) — which is an extremely fast and extensible build system. We recommend that you read the [docs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md) or watch the [Gulp — The Basics](http://www.youtube.com/playlist?list=PLRk95HPmOM6PN-G1xyKj9q6ap_dc9Yckm) tutorials.

The main parts of [gulpfile.js](gulpfile.js), are:

 * [CSS](#css)
 * [HTML](#html)
 * [JavaScript](#javascript)

These tasks were intentionally simplified to keep things small.

Before digging into tasks, we will make a short introduction to [gulp-bem](https://github.com/floatdrop/gulp-bem) which is used in all tasks.

### gulp-bem

If you are familiar with [building](http://getbem.com/building/) BEM projects — then you probably know, that BEM projects have a certain structure: a file with CSS for blocks will be in the `block` folder with the name `{block}.css` (where `{block}` is a placeholder for the current block name). All blocks are grouped to levels — folders with blocks.

With this structure it is not clear in which order you should concatenate blocks and how to get specific files from a block (element or modifier) folder. To make it easy - we wrote [gulp-bem](https://github.com/floatdrop/gulp-bem).

The main object, that powers gulp-bem is [bem-object](https://github.com/floatdrop/bem-object). You can explore the readme in the bem-object repository, but in short — it represents the directory with files (or a single file for a modifier with value case). To get all *bem-objects* from a level you can do `bem.object('level')` - it will return a `Stream` of bem-objects.

gulp-bem also provides `*.deps.js` file support. They are used to define dependencies between blocks. You can read [gulp-bem-specs](https://github.com/floatdrop/gulp-bem-specs) for an explanation.

When talking about dependencies - it is always good to imagine a dependency tree. gulp-bem provides a way to construct those trees and query them for linearized dependencies:

```js
var tree = bem.objects(levels)
    .pipe(bem.deps())
    .pipe(bem.tree());
```

To construct a tree of dependencies - you need to read the `deps` file - we get you covered, and `bem.deps()` reads the file named `{bem}.deps.js` from bem-object (where `{bem}` is BEM identifier for current bem-object).

After the tree is constructed — you can query dependencies of a block: `tree.deps('block')` which return a `Stream` of bem-objects. Usually it is used for building a dependency tree for a single page.

### CSS

To build CSS you don't need magic — it is just a concatenation of `{bem}.css` files in the right order:

```js
tree.deps('levels/pages/index')
    .pipe(bem.src('{bem}.css'))
    .pipe(concat(page.id + '.css'))
    .pipe(gulp.dest('./dist'));
```

`bem.src('{bem}.css')` takes a bem-object and extracts all files that match the arguments. In this example it will get all CSS files with same name as the BEM entity.

If you want to get CSS files for every page (which itself is a block), you need to get all `pages` objects and run build for each of them:

```js
gulp.task('css', function () {
    function buildCss(page) {
        return tree.deps('levels/pages/' + page.id)
            .pipe(bem.src('{bem}.css'))
            .pipe(concat(page.id + '.css'))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('levels/pages').map(buildCss);
});
```

### HTML

This is a tricky part of [getbem.com](http://getbem.com). At first we tried to use [bh](https://github.com/bem/bh) as a templating language but quickly realized that it is too complex to achieve fast development and quick prototyping for the site.

So we used [Jade](jade-lang.com) and it's [mixins](http://jade-lang.com/reference/mixins/) to achieve reusablility of templates from blocks.

In short, blocks can contain a `{bem}.jade` file with a mixin:

```jade
mixin author(avatar, name, link)
  .author
    a.author__link(href=link)
      img.img.img_circle.author__photo(src=avatar)
      span.author__name
        = name
```

After you get this code in the main Jade template, you can call it:

```jade
+author('some', 'sweet', 'parameters')
```

Here is part of a task that compiles a Jade template for the `index` page:

```js
return tree.deps('levels/pages/index')
    .pipe(bem.src('{bem}.jade'))
    .pipe(concat({
        path: 'index.jade',
        base: 'levels/pages/index'
    }))
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('./dist'));
```

The tricky part is getting the right `base` path for the concatenated file:

```js
concat({
    path: 'index.jade',
    base: 'levels/pages/index'
})
```

If you miss the `base` property then `extend` and `include` in Jade template will not work.

Again, to build all pages with Jade, we are using this code:

```js
gulp.task('html', function () {
    function buildHtml(page) {
        return tree.deps('levels/pages/' + page.id)
            .pipe(bem.src('{bem}.jade'))
            .pipe(concat({
                path: page.path + '/' + page.id + '.jade',
                base: page.path
            }))
            .pipe(jade({pretty: true}))
            .pipe(gulp.dest('./dist'));
    }

    return bem.objects('levels/pages').map(buildHtml);
});
```

__Warning:__ Jade is not quite suited for processing concatenated templates from different files — so the line numbers in error messages will be strange.

### JavaScript

Building JavaScript is a very hard task to do. We used a wrapper around [browserify](browserify.org) — [gulp-bem-pack](https://github.com/floatdrop/gulp-bem-pack). It adds the ability to browserify to `require` modules from BEM Levels — which is kind of equivalent to cascading in CSS.

The task to do it is quite short (because we are building it only for index page in our case):

```js
gulp.task('js', function () {
    return tree.deps('levels/pages/index')
        .pipe(bem.src('{bem}.js'))
        .pipe(pack('index.js'))
        .pipe(gulp.dest('./dist'));
});
```

We are looking forward to using [Duo](http://duojs.org/), as soon as the resolving parts are configurable.

## Development

First, clone this repo and install dependencies:

```
git clone https://github.com/getbem/getbem.com.git
cd getbem.com
npm i
bower i
```

After you have cloned the repo and installed the requirements, you can start the development server:

```
gulp
```

It will build the site, start a watcher on files and start a local server on [localhost:4000](http://localhost:4000).

When you are sure about your changes (and if you can push in this repository), you can publish [getbem.com](http://getbem.com):

```
gulp gh
```

##### MIT License

[travis-url]: http://travis-ci.org/getbem/getbem.com
[travis-image]: http://img.shields.io/travis/getbem/getbem.com.svg?branch=master&style=flat

[depstat-url]: https://david-dm.org/getbem/getbem.com
[depstat-image]: http://img.shields.io/david/getbem/getbem.com.svg?style=flat
