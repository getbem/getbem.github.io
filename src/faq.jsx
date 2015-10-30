require('./faq.less');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';
import Footer from './footer';

const faq = require('./markdown/faq.md');

React.render((
	<div>
		<Navbar active='faq'/>
		<div className='faq'>
			<h1>FAQ</h1>
			<p>These Frequently Asked Question are real questions of developers started with BEM, answered by the GetBEM community.
				Feel free to <a href="https://github.com/getbem/getbem.com/issues/new?title=FAQ:%20Type%20your%20question%20here">ask
				your question</a> too, and we will answer it as well.</p>

			<ul>
				<li><a href="#why-bem">Why should I choose BEM and not another CSS modular solution?</a></li>
				<li><a href="#why-the-modifier-classes-are-prefixed">Why the modifier CSS classes are not represented as a combined selector?</a></li>
				<li><a href="#custom-tags-for-blocks">Why do I need CSS classes for block instead of using semantic custom tags?</a></li>
				<li><a href="#block-modifier-mix">Why do I need to combine block and prefixed modifier class for a modified block?</a></li>
				<li><a href="#can-i-create-global-modifier">Can I create a global modifier applicable to any block?</a></li>
				<li><a href="#encapsulating-tag-selector">Can I combine a tag and a class in selector like button.button?</a></li>
				<li><a href="#css-modifier-names">Is this good to name modifiers corresponding to what they have in CSS? Like `.block__element--border-bottom-5px`.</a></li>
				<li><a href="#css-nested-elements">What would be a class name for an element inside another element? `.block__elem1__elem2`?</a></li>
				<li><a href="#global-css-resets">I've heard that BEM does not recommend global CSS resets? Why?</a></li>
				<li><a href="#ask-you-question">Did not find the answer?</a></li>
			</ul>

			<Markdown>{faq}</Markdown>
		</div>
		<Footer/>
	</div>
), document.getElementById('root'));
