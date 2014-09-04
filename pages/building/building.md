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

It is quite a lot of CSS files, if you compare to one `index.css`. Lets build them together!

For building we will use [gulpjs][gulp] - it is simple streaming build system.

```bash
npm install gulp -g
```

All build configurations for gulp is stored in `gulpfile.js` in the root of the project:

```js
var gulp = require('gulp');
```

As you can see, we will write our build configuration in JavaScript. gulp has nice API, that allows you to get files quick and easy. For our needs we will get all CSS files and concatenate them with [gulp-concat][gulp-concat] plugin (there are more than [600 plugins][gulp-plugins] for now):

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
npm i gulp gulp-concat
```

Now if you will type `gulp` in command line, you will build `index.css` file in `dist` directory.

Your CSS is ready!

[gulp]: https://github.com/gulpjs/gulp
[gulp-plugins]: http://gulpjs.com/plugins/
[gulp-concat]: https://github.com/wearefractal/gulp-concat
[gulp-bem]: https://github.com/floatdrop/gulp-bem
