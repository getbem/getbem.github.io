import React, {Component} from 'react';
require('./style.css');

export default class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<a className='navbar__title' href='/'>Get BEM</a>
				<div className='navbar__menu'>
					<ul>
						<li><a href='/introduction.html'>Introduction</a></li>
						<li><a href='/naming.html'>Naming</a></li>
						<li><a href='/faq.html'>FAQ</a></li>
						<li><a href='http://github.com/getbem/getbem.com'>GitHub</a></li>
					</ul>
				</div>
			</div>
		);
	}
}
