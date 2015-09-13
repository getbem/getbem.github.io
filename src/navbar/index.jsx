import React, {Component} from 'react';
require('./style.css');

export default class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 1035}}>
					<a className='navbar__title' href='/'>Get BEM</a>
					<div className='navbar__menu'>
						<ul>
							<li className={this.props.active === 'introduction' ? 'navbar__item--active' : ''}><a href='/introduction/'>Introduction</a></li>
							<li className={this.props.active === 'naming' ? 'navbar__item--active' : ''}><a href='/naming/'>Naming</a></li>
							<li className={this.props.active === 'faq' ? 'navbar__item--active' : ''}><a href='/faq/'>FAQ</a></li>
							<li><a href='http://github.com/getbem/getbem.com'>GitHub</a></li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}
