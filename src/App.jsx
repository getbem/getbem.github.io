import React, {Component} from 'react';
require('./app.css');

export default class App extends Component {
	render() {
		return (
			<div className='layout-transparent mdl-layout mdl-js-layout'>
				<header className='mdl-layout__header mdl-layout__header--transparent'>
					<div className='mdl-layout__header-row'>
						<span className='mdl-layout-title'>Title</span>
						<div className='mdl-layout-spacer'></div>
						<nav className='mdl-navigation'>
							<a className='mdl-navigation__link' href=''>Introduction</a>
							<a className='mdl-navigation__link' href=''>Naming</a>
							<a className='mdl-navigation__link' href=''>FAQ</a>
						</nav>
					</div>
				</header>
				<div className='mdl-layout__drawer'>
					<span className='mdl-layout-title'>Title</span>
					<nav className='mdl-navigation'>
						<a className='mdl-navigation__link' href=''>Introduction</a>
						<a className='mdl-navigation__link' href=''>Naming</a>
						<a className='mdl-navigation__link' href=''>FAQ</a>
					</nav>
				</div>
				<main className='mdl-layout__content' style={{textAlign: 'center'}}>
					<img width='250' height='300' style={{display: 'inline-block'}} src='/assets/b_.svg'></img>
				</main>
			</div>
		);
	}
}
