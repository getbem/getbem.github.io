import header from '../blocks/header';
import footer from '../blocks/footer';
import counters from '../blocks/counters';

import home from './home';
import introduction from './introduction';
import naming from './naming';
import faq from './faq';

export default (state) => {
	const {url} = state;
	let page;

	switch(url) {
	case '/':
		page = home(state);
		break;
	case '/introduction/':
		page = introduction();
		break;
	case '/naming/':
		page = naming();
		break;
	case '/faq/':
		page = faq();
		break
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
