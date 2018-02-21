import header from '../blocks/header';
import footer from '../blocks/footer';
import counters from '../blocks/counters';

import home from './home';
import introduction from './introduction';
import naming from './naming';
import faq from './faq';

export default (state) => {
	let {url} = state;
	let page;

	// check to see if an ID is in the URL
	// if true, concatenate the url to the page address
	if (url.indexOf('#') > -1) {
		url = url.split('#')[0];
	}
	
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
