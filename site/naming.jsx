require('normalize-css');
require('./naming.css');

import React from 'react';
import Navbar from './navbar';
import {Grid, Cell} from 'rgx';
import Footer from './footer';

React.render((
	<div>
		<Navbar/>
		<div className='naming'>
			<h1>Naming</h1>

			<blockquote>There are only two hard problems in Computer Science: cache invalidation and naming things — Phil Karlton</blockquote>

			<p>It is known fact, that the right styleguide can significantly increase development speed, debugging and implementing new features in legacy code. Sadly, most CSS codebase is developed without (sometimes) any structure and naming conventions. This leads to an unmaintainable CSS codebase in the long term.</p>

			<p>The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.</p>

			<h3>Block</h3>

			<p>Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.</p>

			<Grid gutter={0}>
				<Cell min={150}>
					<h4>Meaning</h4>
					<p>Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: .block</p>
				</Cell>
				<Cell min={150}>
					<h4>HTML</h4>
					<p>Any DOM node can be a block if it accepts a class name.</p>
					<pre>{'<div class="block">...</div>'}</pre>
				</Cell>
				<Cell min={150}>
					<h4>CSS</h4>
					<ul>
						<li>Use class name selector only</li>
						<li>No tag name or id's</li>
						<li>No dependency on other blocks/elements on a page</li>
					</ul>
					<pre>{'.block { color: #042 }'}</pre>
				</Cell>
			</Grid>

			<h3>Element</h3>

			<p>Parts of a block and have no standalone meaning. Any element is semantically tied to its block.</p>

			<Grid gutter={0}>
				<Cell min={150}>
					<h4>Meaning</h4>
					<p>Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: .block__elem</p>
				</Cell>
				<Cell min={150}>
					<h4>HTML</h4>
					<p>Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.</p>
					<pre>{`<div class="block">
  ...
  <span class="block__elem"></span>
</div>`}</pre>
				</Cell>
				<Cell min={150}>
					<h4>CSS</h4>
					<ul>
						<li>Use class name selector only</li>
						<li>No tag name or id's</li>
						<li>No dependency on other blocks/elements on a page</li>
					</ul>
					<b>Good</b>
					<pre>{`.block__elem { color: #042; }`}</pre>
					<b>Bad</b>
					<pre>{`.block .block__elem { color: #042; }
div.block__elem { color: #042; }`}</pre>
				</Cell>
			</Grid>

			<h3>Modifier</h3>

			<p>Flags on blocks or elements. Use them to change appearance, behavior or state.</p>

			<Grid gutter={0}>
				<Cell min={150}>
					<h4>Meaning</h4>
					<p>Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block’s or element’s name plus two dashes: .block--mod or .block__mod--mod and .block--color-black with .block--color-red. Spaces in complicated modifiers are replaced by dash.</p>
				</Cell>
				<Cell min={150}>
					<h4>HTML</h4>
					<p>Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class:</p>
					<b>Good</b>
					<pre>{`<div class="block block--mod">...</div>
<div class="block block--size-big block--shadow-yes">...</div>`}</pre>
					<b>Bad</b>
					<pre>{`<div class="block--mod">...</div>`}</pre>
				</Cell>
				<Cell min={150}>
					<h4>CSS</h4>
					<p>Use modifier class name as selector:</p>
					<pre>{'.block--hidden { display: none }'}</pre>
					<p>To alter elements based on a block-level modifier:</p>
					<pre>{'.block--mod .block__elem { display: none }'}</pre>
					<p>Element modifier:</p>
					<pre>{'.block__elem--mod { display: none }'}</pre>
				</Cell>
			</Grid>

			<h3>Example</h3>

			<p>Suppose you have block form with modifiers theme: 'xmas' and simple: true and with elements input and submit, and element submit with its own modifier disabled: true for not submitting form while it's not filled:</p>

			<Grid gutter={0}>
				<Cell min={220}>
					<h4>HTML</h4>
					<pre>{`<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>`}</pre>
				</Cell>
				<Cell min={220}>
					<h4>CSS</h4>
					<pre>{`.form { /* ... */ }
.form--theme-xmas { /* ... */ }
.form--simple { /* ... */ }
.form__input { /* ... */ }
.form__submit { /* ... */ }
.form__submit--disabled { /* ... */ }`}</pre>
				</Cell>
			</Grid>
		</div>
		<Footer/>
	</div>
), document.getElementById('root'));
