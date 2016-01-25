import home from './home';
import about from './about';

import navbar from '../blocks/navbar';
import footer from '../blocks/footer';

export default (state) => {
	const {url} = state;
	let page;

	if (url === '/') {
		page = home(state);
	} else if (url === '/about') {
		page = about();
	}

	return (
		<main>
		{navbar({active: url})}
		{page}
		{footer()}
		</main>
	);
};
