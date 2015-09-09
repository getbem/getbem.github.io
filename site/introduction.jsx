require('normalize-css');

import React from 'react';
import Navbar from './navbar';
import Markdown from './markdown';

const introduction = require('./markdown/introduction.md');

React.render((
	<div>
		<Navbar/>
		<Markdown>{introduction}</Markdown>
	</div>
), document.getElementById('root'));
