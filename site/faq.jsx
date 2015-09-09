require('normalize-css');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';

const faq = require('./markdown/faq.md');

React.render((
	<div>
		<Navbar/>
		<Markdown>{faq}</Markdown>
	</div>
), document.getElementById('root'));
