import marked from 'marked';
import faqMarkdown from '../markdown/faq.md';

export default () => (
	<div className="container faq">
		<h1>FAQ</h1>
		<p>These Frequently Asked Question are real questions of developers started with BEM, answered by the GetBEM community.
			Feel free to <a href="https://github.com/getbem/getbem.com/issues/new?title=FAQ:%20Type%20your%20question%20here">ask
			your question</a> too, and we will answer it as well.</p>

		<div innerHTML={marked(faqMarkdown)}></div>
	</div>
);
