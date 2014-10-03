# Naming

In [Getting Started](getting-started.html) you already read about three main

## Block

Block encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.

## Naming
Block name may consist of Latin letters, digits, and dashes.

To form a CSS class, add short prefix for namespacing: **.block**

> **Note**: You can use **b-** as a class name prefix; you can choose your own, or go without any prefixes at all.

### HTML
Any DOM node can be a block if it accepts a class name.

```html
<div class="block">...</div>
```

### CSS for blocks
  * Use class name selector only
  * No tag names or id's
  * No dependency on other blocks/elements on a page

```css
.block { color: #042 }
```

## Element

Elements are parts of a block and have no standalone meaning.
Any element is semantically tied to its block.

### HTML
Any DOM node within a block can be an element.
Within a given block, all elements are semantically equal.

### Naming
Element name may consist of Latin letters, digits, and dashes.

CSS class is formed as block name + two undercores + element name:
**.block__elem**

```html
<div class="block">
  ...
  <span class="block__elem"></span>
</div>
```

### CSS for elements
  * Use class name selector only
  * No tag name or id's
  * No dependency on other blocks/elements on a page

```css
  /* BAD */ .block .block__elem { border: solid 1px #000 }
  /* BAD */        div.block__elem { border: solid 1px #000 }

  /* GOOD  */         .block__elem { border: solid 1px #000 }
```

## Modifier

Modifiers are flags on blocks or elements.
Use them to change appearance or behavior.

### HTML
Modifier is an extra class name which you add to a block/element DOM node.

### Naming
Modifiers (both keys and values) may consist of Latin letters, digits, and dashes.

Modifier can be a boolean flag or a key/value pair.
Naming conventions:

  * Boolean modifiers:<br>
    Original block/element name + single underscore + mod name<br>
    **.block_mod** or **.block__elem_mod**
  * Key/value modifiers:<br>
    Original block/element name + single underscore + mod key name + single underscore + mod value<br>
    **.block_key_value** or **.block__elem_key_value**

Add modifier classes only to blocks/elements they modify, and keep the original class:

```html
  GOOD <div class="block block_mod">...</div>
  GOOD <div class="block block_size_big block_shadow_yes">...</div>

  BAD  <div class="block_mod">...</div>
```
Modifiers don't have formal hierarchy, but when they co-exist on a single node, CSS rules will be resolved according to CSS specificity.

### CSS for modifiers
Use modifier class name as selector:

```css
.block_hidden { display: none }
```

To alter elements based on a block-level modifier:

```css
.block_mod .block__elem { display: none }
```

Element modifier:

```css
.block__elem_mod { display: none }
```
