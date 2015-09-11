require('normalize-css');
require('./faq.css');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';

const faq = require('./markdown/faq.md');

React.render((
	<div>
		<Navbar/>
		<div className='faq'>
			<Markdown>{faq}</Markdown>
		</div>
	</div>
), document.getElementById('root'));
