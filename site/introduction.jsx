require('normalize-css');
require('./introduction.css');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';
import {Grid, Cell} from 'rgx';

const introduction = require('./markdown/introduction.md');

React.render((
	<div>
		<Navbar/>
		<div className='introduction'>
		<h1>Introduction</h1>

			<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

			<p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

			<p>This also true for long-term projects with legacy code (read <a href='http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/'>"How to Scale and Maintain Legacy CSS with Sass and SMACSS"</a> — some nice SMACSS and BEM mixing in there).</p>

		<h2>Methodologies</h2>

			<p>There are plenty of <a href='https://github.com/ikkou/awesome-css#architecture'>methodologies</a> out there which aimed on reducing CSS codebase and organizing programmers cooperation and maintaining of CSS code. This is obvious in large projects like Twitter, Facebook and <a href='http://markdotto.com/2014/07/23/githubs-css/#two-bundles'>Github</a>, but other projects often grows into same “Huge CSS file” state pretty quickly.</p>

		<Grid gutter={0}>
			<Cell min={150}>
				<h4><a href='https://oocss.org/'>OOCSS</a></h4>
				Separating container and content with CSS “objects”
			</Cell>
			<Cell min={150}>
				<h4><a href='https://smacss.com/'>SMACSS</a></h4>
				Style-guide to write your CSS with five categories for CSS rules
			</Cell>
			<Cell min={150}>
				<h4><a href='http://suitcss.github.io/'>SUITCSS</a></h4>
				Structured class names and meaningful hyphens
			</Cell>
			<Cell min={150}>
				<h4><a href='https://github.com/nemophrost/atomic-css'>Atomic</a></h4>
				Breaking down styles into atomic, or indivisible, pieces
			</Cell>
		</Grid>

		<h2>Why BEM over the others?</h2>

			<p>No matter what methodology you choose to use in your projects, you will get advantages of structured CSS and UI. Some of them are less strict and more flexible, other is easier to understand and adapt in team.</p>

			<blockquote>
				<p>The reason I choose BEM over other methodologies comes down to this: it's less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognizable terminology.</p>
				<footer>Mark McDonnell, <a href="http://www.integralist.co.uk/posts/maintainable-css-with-bem/#why-bem-over-the-others">Maintainable CSS with BEM</a></footer>
			</blockquote>

		<h2>Blocks, Elements and Modifiers</h2>

			<p>You will not be surprised, that BEM is abbreviation of the key elements of the methodology — Block, Element and Modifier. Strict rules of naming can be found in <a href='/naming.html'>Naming</a> article.</p>

			<Grid gutter={0}>
				<Cell min={150}>
					<h4>Block</h4>
					<p>Standalone entity that is meaningful on its own.</p>

					<b>Examples</b>
					`header`, `container`, `menu`, `checkbox`, `input`
				</Cell>
				<Cell min={150}>
					<h4>Element</h4>
					<p>Parts of a block and have no standalone meaning. They are semantically tied to its block.</p>

					<b>Examples</b>
					`menu item`, `list item`, `checkbox caption`, `header title`
				</Cell>
				<Cell min={150}>
					<h4>Modifier</h4>
					<p>Flags on blocks or elements. Use them to change appearance or behavior.</p>

					<b>Examples</b>
					`disabled`, `highlighted`, `checked`, `fixed`, `size big`, `color yellow`
				</Cell>
			</Grid>

			<img src='../../assets/github_captions.jpg'/>

		<h2>Under the hood</h2>

			<p>Lets look how one particular element on page can be implemented in BEM. We will take `button` from <a href='https://github.com/styleguide/css/1.0'>GitHub styleguide</a>:</p>

			<img src='../../assets/github_buttons.jpg'/>

			<p>We can have normal button for usual cases, and two more states for different ones. Because of BEM style blocks by class selectors, we can implement blocks with any tags we want (`button`, `a` or even `div`). Naming invites us to use `block--modifier--value` syntax.</p>

			<Grid gutter={0}>
				<Cell min={200}>
					<h4>HTML</h4>
					<pre>{`<button class="button">
  Normal button
</button>

<button class="button button--state-success">
  Success button
</button>

<button class="button button--state-danger">
  Danger button
</button>`}</pre>
				</Cell>
				<Cell min={200}>
					<h4>CSS</h4>
					<pre>{`.button {
  display: inline-block;
  border-radius: 3px;
  padding: 7px 12px;
  border: 1px solid #D5D5D5;
  background-image: linear-gradient(#EEE, #DDD);
  font: 700 13px/18px Helvetica, arial;
}

.button--state-success {
  color: #FFF;
  background: #569E3D linear-gradient(#79D858, #569E3D) repeat-x;
  border-color: #4A993E;
}

.button--state-danger {
  color: #900;
}`}</pre>
				</Cell>
			</Grid>

		<h2>Benefits</h2>

			<Grid gutter={0}>
				<Cell min={150}>
					<h4>Modularity</h4>
					<p>Blocks styles should not have dependencies on other elements on a page, therefore you will never get <a href='http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/'>problems from cascading</a>.</p>
					<p>This also gives you ability to transfer blocks from ready project to new one.</p>
				</Cell>
				<Cell min={150}>
					<h4>Reusability</h4>
					<p>Composing independent blocks in a different way and reusing them reduces amount of CSS code, that you will maintain.</p>
					<p>If you have design guidelines, then it is super effective to have ready Blocks library.</p>
				</Cell>
				<Cell min={150}>
					<h4>Structure</h4>
					<p>BEM methodology gives you simple and understandable structure in your CSS code.</p>
				</Cell>
			</Grid>

		<h2>Further Reading</h2>

			<ul>
				<li><a href='http://www.bluegg.co.uk/building-my-health-skills-part-3/'>Building My Health Skills — Part 3</a></li>
			</ul>

		<h2>Case study</h2>

			<p>We are looking forward to writing "How to migrate existing project to BEM". In meanwhile you can watch nice presentation by Nicole Sullivan — "<a href='http://www.youtube.com/watch?v=0NDyopLKE1w'>CSS preprocessor performance</a>". It gives a very good explanation of problems, that she meets in major of sites and ways to track and handle them.</p>
		</div>
	</div>
), document.getElementById('root'));
