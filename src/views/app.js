import home from './home';
import introduction from './introduction';
import naming from './naming';
import faq from './faq';

import header from '../blocks/header';
import footer from '../blocks/footer';
import counters from '../blocks/counters';

export default (state) => {
	const {url, faqMarkdown} = state;
	let page;

	if (url === '/') {
		page = home(state);
	} else if (url === '/introduction/') {
		page = introduction();
	} else if (url === '/naming/') {
		page = naming();
	} else if (url === '/faq/') {
		page = faq();
	}

	if (typeof window !== 'undefined' && typeof window.ga !== 'undefined') {
		window.ga('send', 'pageview', url);
	}

	return (
		<div>
		{header(state)}
		{page}
		{footer()}
		{counters()}
		</div>
	);
};
