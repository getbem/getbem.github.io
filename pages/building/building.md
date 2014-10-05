# Structure

While structuring your site in BEM way is good for performance and development, storing all CSS in one file is not a good idea for growing project. If you followed [Naming](naming.html) section, you should have next file structure:

```
index.css
index.html
```

We proposing next way to structure you files, that will help you to adapt BEM methodology not only for CSS, but for JavaScript and even for templating!

 1. Group all CSS selectors from previous examples for `form` block in it own file: `form.css`. This is first step in structuring your CSS.
 1. Create a directory with block name, which files you want to group in it: `/form/` and move this file there.

Success! You should have this file initial file structure:

```
form/
    form.css
index.css
index.html
```

There are some selector for blocks in `index.css` thou. Keep moving all block from `index.css` to separate files until you eliminate `index.css`:

```
form/
    form.css
page/
    page.css
index.html
```

While creating blocks is pretty straight forwad, there are some rules how create elements and modifiers folders inside block folder:

```
form/
    __input/
        form__input.css
    __submit/
        _disabled/
            form__submit_disable.css
        form__submit.css
page/
    page.css
index.css
```

As you can see, all element files for block are placed into directory, that begins with `__` and same rules applies for modifiers, but prefix is shorter — `_`.

Now you probably want to include all CSS files with `<style>` tags in `index.html` file. This is one way to do it, but we recommend you to use build system like [gulpjs][gulp]. We even wrote a section [Building](building.html) about it.

## Levels

This section is all about `Levels`. Idea is simple — we want a way to extend CSS/JavaScript/Templates of Block from already builded libraries of Blocks. To achieve this we will do a pretty simple thing — create a directory of blocks! Thats right — `Level` is just a directory of blocks directories.

For simplicity we will create `Level` `blocks` and move all created blocks there:

```
blocks/
    form/
        __input/
            form__input.css
        __submit/
            form__submit.css
        __submit/
            _disabled/
                form__submit_disable.css
    page/
        page.css
index.css
```

Yay! You have your own `Level` of declaration in your project! Now we get some responsive grids in our project. We will use [pure-grids][pure-grids] from [purecss.io][purecss-grids], but ported version of them on BEM methodology. For easy installation you will need [bower.io](https://bower.io) package manager. Follow the [instructions](http://bower.io/#install-bower) to install bower.

Installation of layer is easy and fast:

```bash
bower install floatdrop/pure-grids
```

This will install `pure-grids` layer into `vendor` folder. All blocks for grids (actually one block) is in `vendor/pure-grids` directory. Now you are ready to build your project with multiple levels. Follow to the [building](building.html) section to read about it.

[gulp]: https://github.com/gulpjs/gulp
[pure-grids]: https://github.com/floatdrop/pure-grids
[purecss-grids]: http://purecss.io/grids/

# Building

Now you have structured project with BEM in mind:

```
vendor/
    pure-grids/
        grid/
            __col/
                grid__col.css
            grid.css
blocks/
    form/
        __input/
            form__input.css
        __submit/
            form__submit.css
        __submit/
            _disabled/
                form__submit_disable.css
    page/
        page.css
index.css
```

It is quite a lot of CSS files, if you compare to one `index.css`. Lets build them together! For building we will use [gulpjs][gulp] - it is simple streaming build system.

```bash
npm install gulp -g
```

All build configurations for gulp is stored in `gulpfile.js` in the root of the project:

```js
var gulp = require('gulp');
```

As you can see, we will write our build configuration in JavaScript. gulp has nice API, that allows you to get files quick and easy.

## Building CSS

Since BEM is methodology of non-dependent blocks without CSS cascading problems we can take CSS files and concatenate them with [gulp-concat][gulp-concat] plugin (there are more than [600 plugins][gulp-plugins] for now):

```js
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src(['vendor/**/*.css', 'blocks/**/*.css'])
        .pipe(concat('index.css'))
        .pipe(gulp.dest('dist'));
});
```

Gulp file is ready. Time to install dependencies:

```bash
npm i --save gulp gulp-concat
```

Now if you will type `gulp` in command line, you will build `index.css` file in `dist` directory. Your CSS is ready!

## Building JavaScript

There are two ways to organize your JavaScript code: [AMD](https://wikipedia.org/wiki/Asynchronous_module_definition) and [CommonJS](https://en.wikipedia.org/wiki/CommonJS). Both of them have they own advantages and downsides.

### AMD

For AMD way you will need some prelude JavaScript file, that will handle definitions of modules. For example sample [RequireJS](http://requirejs.org/) module will look like this:

```js
require(["helper/util"], function(util) {
    /* Your code gose here */
});
```

It can differ for concrete AMD module, but main idea is same. `require` function is loaded from prelude file. All you need is concatinate all yours JavaScript files after this special `prelude.js` file:

```js
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function () {
    return gulp.src(['lib/prelude.js', 'vendor/**/*.js', 'blocks/**/*.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('dist'));
});
```

Keep in mind, that RequireJS is not suited for BEM levels.

### CommonJS

In other hand, CommonJS style does not requires special `prelude.js` file (but it will add `require` definition in resulting file). Example JavaScript file written in CommonJS style looks like this:

```js
var util = require("helper/util");

/* Your code gose here */
```

It a bit more straight forward, but it is quite hard to implement async loading of dependencies in CommonJS. But if you don't need them - it is good choise. We will build `index.js` with [browserify](http://browserify.org/) wrapper [gulp-bem-pack](https://github.com/floatdrop/gulp-bem-pack):

```js
var gulp = require('gulp');
var bempack = require('gulp-bem-pack');

gulp.task('default', function () {
    gulp.src(['base/**/*.js', 'main/**/*.js'])
        .pipe(bempack('index.js'))
        .pipe(gulp.dest('dist'));
});
```

You can build your JavaScript with bare browserify plugin, but you will have to handle path resolving, which is handled by [bem-pack](https://github.com/floatdrop/gulp-bem-pack) in this example. JavaScript is ready to go!

## Building Templates

This is most complex part, because you can't just concatinate HTML files and template engine often will not support you in this task. We will demonstrate how to build Jade templates with help of Jade mixins to get something like custom blocks.

First we create `index.jade` file with next content:

```jade
html
  head
    title Hello BEM!
  body
    +header('Title of header')
      p content of header
```

Jade has pretty neat and powerful syntax, which very attractive against other alternatives. Now we have to load `+header` from `base/header/header.jade`:

```jade
+header(title)
  h1
    =title
  code
    block
```

Now it is time to build it:

```js
var gulp = require('gulp');
var jade = require('gulp-jade');
var concat = require('gulp-concat');

gulp.task('default', function () {
    gulp.src(['base/**/*.jade', 'index.jade'])
        .pipe(concat('index.jade'))
        .pipe(jade({pretty: true}))
        .pipe(gulp.dest('dist'));
});
```

Jade is not well suited for mixin extension, but for small projects it is a very good start.

[gulp]: https://github.com/gulpjs/gulp
[gulp-plugins]: http://gulpjs.com/plugins/
[gulp-concat]: https://github.com/wearefractal/gulp-concat
[gulp-bem]: https://github.com/floatdrop/gulp-bem
