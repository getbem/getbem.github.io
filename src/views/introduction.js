export default () => (
	<div className="container introduction">
		<h1>Introduction</h1>

		<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>

		<p>However, when it comes to larger, more complex projects, how you organize your code is the key to efficiency in at least these three ways: it affects how long it takes you to write code, how much of that code you’ll have to write and how much loading your browser will have to do. This becomes especially important when you’re working with teams of themers, and when high performance is essential.</p>

		<p>This is also true for long-term projects with legacy code (read <a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">"How to Scale and Maintain Legacy CSS with Sass and SMACSS"</a> — some nice SMACSS and BEM mixing in there).</p>


		<h2>Methodologies</h2>

		<p>There are plenty of <a href="https://github.com/ikkou/awesome-css#architecture">methodologies</a> out there aiming to reduce the CSS footprint, organize cooperation among programmers and maintain large CSS codebases. This is obvious in large projects like Twitter, Facebook and <a href="http://markdotto.com/2014/07/23/githubs-css/#two-bundles">Github</a>, but other projects often grow into some “Huge CSS file” state pretty quickly.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//oocss.org/">OOCSS</a></h4>
					Separating container and content with CSS “objects”
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//smacss.com/">SMACSS</a></h4>
					Style-guide to write your CSS with five categories for CSS rules
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//suitcss.github.io/">SUITCSS</a></h4>
					Structured class names and meaningful hyphens
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4><a href="//github.com/nemophrost/atomic-css">Atomic</a></h4>
					Breaking down styles into atomic, or indivisible, pieces
				</div>
			</div>
		</div>

		<p></p>

		<h2>Why BEM over the others?</h2>

		<p>No matter what methodology you choose to use in your projects, you will benefit from the advantages of more structured CSS and UI. Some styles are less strict and more flexible, while others are easier to understand and adapt in a team.</p>

		<blockquote>
			<p>The reason I choose BEM over other methodologies comes down to this: it is less confusing than the other methods (i.e. SMACSS) but still provides us the good architecture we want (i.e. OOCSS) and with a recognizable terminology.</p>
			<footer>Mark McDonnell, <a href="http://www.integralist.co.uk/posts/bem.html#4">Maintainable CSS with BEM</a></footer>
		</blockquote>

		<h2>Blocks, Elements and Modifiers</h2>

		<p>You will not be surprised to hear that BEM is an abbreviation of the key elements of the methodology — Block, Element and Modifier. BEM’s strict naming rules can be found <a href="/naming/">here</a>.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell introduction__cell--block">
					<h3>Block</h3>
					<p>Standalone entity that is meaningful on its own.</p>

					<h5>Examples</h5>
					<code>header</code>, <code>container</code>, <code>menu</code>, <code>checkbox</code>, <code>input</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--element">
					<h3>Element</h3>
					<p>A part of a block that has no standalone meaning and is semantically tied to its block.</p>

					<h5>Examples</h5>
					<code>menu item</code>, <code>list item</code>, <code>checkbox caption</code>, <code>header title</code>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell introduction__cell--modifier">
					<h3>Modifier</h3>
					<p>A flag on a block or element. Use them to change appearance or behavior.</p>

					<h5>Examples</h5>
					<code>disabled</code>, <code>highlighted</code>, <code>checked</code>, <code>fixed</code>, <code>size big</code>, <code>color yellow</code>
				</div>
			</div>
		</div>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="/assets/github_captions.jpg" style={{width: '100%', maxWidth: '930px'}}/>
		</div>

		<h2>Under the hood</h2>

		<p>Let’s look how one particular element on a page can be implemented in BEM. We will take <code>button</code> from <a href="http://primercss.io/buttons/">GitHub</a>:</p>

		<div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '40px'}}>
			<img src="/assets/github_buttons.jpg" style={{width: '100%', maxWidth: '361px'}}/>
		</div>

		<p>We can have a normal button for usual cases, and two more states for different ones. Because we style blocks by class selectors with BEM, we can implement them using any tags we want (<code>button</code>, <code>a</code> or even <code>div</code>). The naming rules tell us to use <code>block--modifier-value</code> syntax.</p>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
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
			</div>
			<div className="column">
				<div className="introduction__cell">
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
			</div>
		</div>

		<h2>Benefits</h2>

		<div className="row">
			<div className="column">
				<div className="introduction__cell">
					<h4>Modularity</h4>
					<p>Block styles are never dependent on other elements on a page, so you will never experience <a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">problems from cascading</a>.</p>
					<p>You also get the ability to transfer blocks from your finished projects to new ones.</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>Reusability</h4>
					<p>Composing independent blocks in different ways, and reusing them intelligently, reduces the amount of CSS code that you will have to maintain.</p>
					<p>With a set of style guidelines in place, you can build a library of blocks, making your CSS super effective.</p>
				</div>
			</div>
			<div className="column">
				<div className="introduction__cell">
					<h4>Structure</h4>
					<p>BEM methodology gives your CSS code a solid structure that remains simple and easy to understand.</p>
				</div>
			</div>
		</div>

		<h2>Further Reading</h2>
		<ul>
			<li><a href="http://blog.decaf.de/2015/06/24/why-bem-in-a-nutshell/">‘Why BEM?’ in a nutshell</a></li>
			<li><a href="http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/">MindBEMding</a> — getting your head ’round BEM syntax</li>
			<li><a href="http://cssguidelin.es/#bem-like-naming">CSS guidelines</a></li>
			<li><a href="http://www.smashingmagazine.com/2014/07/17/bem-methodology-for-small-projects/">BEM methodology for small projects</a></li>
			<li><a href="http://www.slideshare.net/MaxShirshin/bem-it-for-brandwatch">BEM It! for Brandwatch</a></li>
			<li><a href="http://www.phase2technology.com/blog/used-and-abused-css-inheritance-and-our-misuse-of-the-cascade/">Used and Abused</a> — CSS Inheritance and Our Misuse of the Cascade.</li>
			<li><a href="https://medium.com/objects-in-space/objects-in-space-f6f404727">Objects in Space</a> — A style-guide for modular SASS development using SMACSS and BEM</li>
			<li><a href="http://webuild.envato.com/blog/how-to-scale-and-maintain-legacy-css-with-sass-and-smacss/">How to Scale and Maintain Legacy CSS with Sass and SMACSS</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">Building a modular My Health Skills with BEM and Sass</a></li>
			<li><a href="http://www.bluegg.co.uk/building-my-health-skills-part-3/">Building My Health Skills — Part 3</a></li>
		</ul>

		<h2>Case study</h2>

		<p>We hope to write "How to migrate an existing project to BEM" soon. In the meantime you can watch this nice presentation by Nicole Sullivan — "<a href="http://www.youtube.com/watch?v=0NDyopLKE1w">CSS preprocessor performance</a>". She gives a very good overview of the problems she encounters in the majority of websites and offers ways to track them down and handle them.</p>
	</div>
);
