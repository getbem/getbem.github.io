require('./introduction.less');

import React from 'react';
import Navbar from './navbar';
import {Grid, Cell} from 'rgx';
import Footer from './footer';

React.render((
	<div>
		<Navbar active='introduction'/>
		<div className='introduction'>
		<h1>Introduction</h1>

			<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

			<p>However, when it comes to larger, more complex projects, how you organize your code is a key to efficiency. Not only in how much time it takes, but also in how much code you write, and how much a browser has to load. This is especially important when you’re working with a team of themers, and when performance is important.</p>

			<p>This also true for long-term projects with legacy code (read <a href='http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/'>"How to Scale and Maintain Legacy CSS with Sass and SMACSS"</a> — some nice SMACSS and BEM mixing in there).</p>

		<h2>Methodologies</h2>

			<p>There are plenty of <a href='https://github.com/ikkou/awesome-css#architecture'>methodologies</a> out there which aimed on reducing CSS codebase and organizing programmers cooperation and maintaining of CSS code. This is obvious in large projects like Twitter, Facebook and <a href='http://markdotto.com/2014/07/23/githubs-css/#two-bundles'>Github</a>, but other projects often grows into same “Huge CSS file” state pretty quickly.</p>

		<Grid gutter={0}>
			<Cell min={150}>
				<div className='introduction__cell'>
					<h4><a href='https://oocss.org/'>OOCSS</a></h4>
					Separating container and content with CSS “objects”
				</div>
			</Cell>
			<Cell min={150}>
				<div className='introduction__cell'>
					<h4><a href='https://smacss.com/'>SMACSS</a></h4>
					Style-guide to write your CSS with five categories for CSS rules
				</div>
			</Cell>
			<Cell min={150}>
				<div className='introduction__cell'>
					<h4><a href='http://suitcss.github.io/'>SUITCSS</a></h4>
					Structured class names and meaningful hyphens
				</div>
			</Cell>
			<Cell min={150}>
				<div className='introduction__cell'>
					<h4><a href='https://github.com/nemophrost/atomic-css'>Atomic</a></h4>
					Breaking down styles into atomic, or indivisible, pieces
				</div>
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
					<div className='introduction__cell introduction__cell--block'>
						<h3>Block</h3>
						<p>Standalone entity that is meaningful on its own.</p>

						<h5>Examples</h5>
						<code>header</code>, <code>container</code>, <code>menu</code>, <code>checkbox</code>, <code>input</code>
					</div>
				</Cell>
				<Cell min={150}>
					<div className='introduction__cell introduction__cell--element'>
						<h3>Element</h3>
						<p>Parts of a block and have no standalone meaning. They are semantically tied to its block.</p>

						<h5>Examples</h5>
						<code>menu item</code>, <code>list item</code>, <code>checkbox caption</code>, <code>header title</code>
					</div>
				</Cell>
				<Cell min={150}>
					<div className='introduction__cell introduction__cell--modifier'>
						<h3>Modifier</h3>
						<p>Flags on blocks or elements. Use them to change appearance or behavior.</p>

						<h5>Examples</h5>
						<code>disabled</code>, <code>highlighted</code>, <code>checked</code>, <code>fixed</code>, <code>size big</code>, <code>color yellow</code>
					</div>
				</Cell>
			</Grid>

			<img src='../../assets/github_captions.jpg' style={{width: '100%'}}/>

		<h2>Under the hood</h2>

			<p>Lets look how one particular element on page can be implemented in BEM. We will take <code>button</code> from <a href='http://primercss.io/buttons/'>GitHub</a>:</p>

			<div style={{textAlign: 'center', paddingTop: 10, paddingBottom: 50}}>
				<img src='../../assets/github_buttons.jpg'/>
			</div>

			<p>We can have normal button for usual cases, and two more states for different ones. Because of BEM style blocks by class selectors, we can implement blocks with any tags we want (<code>button</code>, <code>a</code> or even <code>div</code>). Naming invites us to use <code>block--modifier--value</code> syntax.</p>

			<Grid gutter={0}>
				<Cell min={300}>
					<div className='introduction__cell'>
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
					</div>
				</Cell>
				<Cell min={300}>
					<div className='introduction__cell'>
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
				</div>
				</Cell>
			</Grid>

		<h2>Benefits</h2>

			<Grid gutter={0}>
				<Cell min={150}>
					<div className='introduction__cell'>
						<h4>Modularity</h4>
						<p>Blocks styles should not have dependencies on other elements on a page, therefore you will never get <a href='http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/'>problems from cascading</a>.</p>
						<p>This also gives you ability to transfer blocks from ready project to new one.</p>
					</div>
				</Cell>
				<Cell min={150}>
					<div className='introduction__cell'>
						<h4>Reusability</h4>
						<p>Composing independent blocks in a different way and reusing them reduces amount of CSS code, that you will maintain.</p>
						<p>If you have design guidelines, then it is super effective to have ready blocks library.</p>
					</div>
				</Cell>
				<Cell min={150}>
					<div className='introduction__cell'>
						<h4>Structure</h4>
						<p>BEM methodology gives you simple and understandable structure in your CSS code.</p>
					</div>
				</Cell>
			</Grid>

		<h2>Further Reading</h2>

			<ul>
				<li><a href='http://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/'>‘Why BEM?’ in a nutshell</a></li>
				<li><a href='http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/'>MindBEMding</a> — getting your head ’round BEM syntax</li>
				<li><a href='http://cssguidelin.es/#bem-like-naming'>CSS guidelines</a></li>
				<li><a href='http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/'>BEM methodology for small projects</a></li>
				<li><a href='http://www.slideshare.net/MaxShirshin/bem-it-for-brandwatch'>BEM It! for Brandwatch</a></li>
				<li><a href='http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/'>Used and Abused</a> — CSS Inheritance and Our Misuse of the Cascade.</li>
				<li><a href='https://medium.com/objects-in-space/objects-in-space-f6f404727'>Objects in Space</a> — A style-guide for modular SASS development using SMACSS and BEM</li>
				<li><a href='http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/'>How to Scale and Maintain Legacy CSS with Sass and SMACSS</a></li>
				<li><a href='http://www.bluegg.co.uk/building-my-health-skills-part-3/'>Building a modular My Health Skills with BEM and Sass</a></li>
				<li><a href='http://www.bluegg.co.uk/building-my-health-skills-part-3/'>Building My Health Skills — Part 3</a></li>
			</ul>

		<h2>Case study</h2>

			<p>We are looking forward to writing "How to migrate existing project to BEM". In meanwhile you can watch nice presentation by Nicole Sullivan — "<a href='http://www.youtube.com/watch?v=0NDyopLKE1w'>CSS preprocessor performance</a>". It gives a very good explanation of problems, that she meets in major of sites and ways to track and handle them.</p>
		</div>
        <Footer/>
	</div>
), document.getElementById('root'));
