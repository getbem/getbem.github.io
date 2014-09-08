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
