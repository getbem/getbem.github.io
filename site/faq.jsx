require('./faq.less');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';
import Footer from './footer';

const faq = require('./markdown/faq.md');

React.render((
	<div>
		<Navbar active='faq'/>
		<div className='faq'>
			<Markdown>{faq}</Markdown>
		</div>
		<Footer/>
	</div>
), document.getElementById('root'));
