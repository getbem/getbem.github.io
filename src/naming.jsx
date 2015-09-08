require('normalize-css');

import React from 'react';
import Header from './header';
import Footer from './footer';

React.render((
	<div>
		<Header/>
		<Footer/>
	</div>
), document.getElementById('root'));
