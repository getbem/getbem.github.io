# Naming

Firstly, you should start properly name your classes, like `block` for block entities, `block__elem` for block's elements, `block_mod_value` and `block__elem_mod_value` for block's mods and elem's mods, respectively.

So if you have block: `form` with mods `theme: xmas` and `simple: true` and with elems `input` and `submit`, and elem `submit` have it's own mod `disabled: true` for not submitting form while it's not filled. So your html will look, like this:

```html
<form class="form form_theme_xmas form_simple_true">
    <input class="form__input" type="text" />
    <input class="form__submit form__submit_disabled_true" type="submit" />
</form>
```

After you have some html, you have to style it with CSS. In BEM you can do it with these selectors list:

```css
.form {}
.form_theme_xmas {}
.form_simple_true {}
.form__input {}
.form__submit {}
.form__submit_disabled_true {}
```

In block selector `.form {}` you declare base styles for form. In mods selectors `.form_theme_xmas`, `.form_simple_true` you can extend or override base styles from block selector. Elem's selectors `.form__input`, `.form__submit` you can write styles for each elem. Case with mods for elem is the same as case with mods for block: in `.form__submit_disabled_true` you can extend or override `submit` styles.

**Congratulations!** You are using BEM naming now!

## Next step

If you want to try the whole power of BEM you should teach about [BEM folder structure](structure.html).
