export default () => (
	<div className="container naming">
	<h1>Naming</h1>

			<blockquote>There are only two hard problems in Computer Science: cache invalidation and naming things — <i>Phil Karlton</i></blockquote>

			<p>It is a known fact that the right styleguide can significantly increase development speed, debugging, and the implementation of new features in legacy code. Sadly, most CSS codebases are sometimes developed without any structure or naming conventions. This leads to an unmaintainable CSS codebase in the long term.</p>

			<p>The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.</p>

			<div className="naming__group naming__group--block">
				<div className="naming__cell naming__cell--block">
					<h3>Block</h3>

					<p>Encapsulates a standalone entity that is meaningful on its own. While blocks can be nested and interact with each other, semantically they remain equal; there is no precedence or hierarchy. Holistic entities without DOM representation (such as controllers or models) can be blocks as well.</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Block names may consist of Latin letters, digits, and dashes. To form a CSS class, add a short prefix for namespacing: <code>.block</code></p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>Any DOM node can be a block if it accepts a class name.</p>
							<pre>{'<div class="block">...</div>'}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<ul>
								<li>Use class name selector only</li>
								<li>No tag name or ids</li>
								<li>No dependency on other blocks/elements on a page</li>
							</ul>
							<pre>{".block { color: #042; }"}</pre>
						</div>
					</div>
				</div>
			</div>

			<div className="naming__group naming__group--element">
				<div className="naming__cell naming__cell--element">
					<h3>Element</h3>
					<p>Parts of a block and have no standalone meaning. Any element is semantically tied to its block.</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Element names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block name plus two underscores plus element name: <code>.block__elem</code></p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>Any DOM node within a block can be an element. Within a given block, all elements are semantically equal.</p>
							<pre>{`<div class="block">
	  ...
	  <span class="block__elem"></span>
	</div>`}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<ul>
								<li>Use class name selector only</li>
								<li>No tag name or ids</li>
								<li>No dependency on other blocks/elements on a page</li>
							</ul>
							<b>Good</b>
							<pre>{`.block__elem { color: #042; }`}</pre>
							<b>Bad</b>
							<pre>{`.block .block__elem { color: #042; }
	div.block__elem { color: #042; }`}</pre>
						</div>
					</div>
				</div>
			</div>

			<div className="naming__group naming__group--modifier">
				<div className="naming__cell naming__cell--modifier">
					<h3>Modifier</h3>
					<p>Flags on blocks or elements. Use them to change appearance, behavior or state.</p>
				</div>

				<div className="row">
					<div className="column">
						<div className="naming__cell">
							<h5>Naming</h5>
							<p>Modifier names may consist of Latin letters, digits, dashes and underscores. CSS class is formed as block’s or element’s name plus two dashes: <code>.block--mod</code> or <code>.block__elem--mod</code> and <code>.block--color-black</code> with <code>.block--color-red</code>. Spaces in complicated modifiers are replaced by dash.</p>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>HTML</h5>
							<p>Modifier is an extra class name which you add to a block/element DOM node. Add modifier classes only to blocks/elements they modify, and keep the original class:</p>
							<b>Good</b>
							<pre>{`<div class="block block--mod">...</div>
	<div class="block block--size-big
		block--shadow-yes">...</div>`}</pre>
							<b>Bad</b>
							<pre>{`<div class="block--mod">...</div>`}</pre>
						</div>
					</div>
					<div className="column">
						<div className="naming__cell">
							<h5>CSS</h5>
							<p>Use modifier class name as selector:</p>
							<pre>{".block--hidden { }"}</pre>
							<p>To alter elements based on a block-level modifier:</p>
							<pre>{".block--mod .block__elem { }"}</pre>
							<p>Element modifier:</p>
							<pre>{".block__elem--mod { }"}</pre>
						</div>
					</div>
				</div>
			</div>

			<h3>Example</h3>

			<p>Suppose you have block form with modifiers <code>theme: "xmas"</code> and <code>simple: true</code> and with elements <code>input</code> and <code>submit</code>, and element <code>submit</code> with its own modifier <code>disabled: true</code> for not submitting form while it is not filled:</p>

			<div className="row">
				<div className="column">
					<div className="naming__cell">
						<h5>HTML</h5>
						<pre>{`<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>`}</pre>
					</div>
				</div>
				<div className="column">
					<div className="naming__cell">
						<h5>CSS</h5>
						<pre>{`.form { }
.form--theme-xmas { }
.form--simple { }
.form__input { }
.form__submit { }
.form__submit--disabled { }`}</pre>
					</div>
				</div>
			</div>
	</div>
);
