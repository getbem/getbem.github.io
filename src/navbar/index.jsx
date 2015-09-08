import React, {Component} from 'react';
require('./style.css');

export default class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<span className='navbar__title'>Get BEM</span>
				<div className='navbar__menu'>
					<ul>
						<li><a href='introduction'>Introduction</a></li>
						<li><a href='naming'>Naming</a></li>
						<li><a href='faq'>FAQ</a></li>
						<li><a href='http://github.com/getbem/getbem.com'>GitHub</a></li>
					</ul>
				</div>
			</div>
		);
	}
}
