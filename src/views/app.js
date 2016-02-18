import home from './home';
import introduction from './introduction';
import naming from './naming';
import faq from './faq';

import navbar from '../blocks/navbar';
import footer from '../blocks/footer';

export default (state) => {
	const {url} = state;
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

	return (
		<div>
		{navbar({active: url})}
		{page}
		{footer()}
		</div>
	);
};
