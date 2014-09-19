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
