import React, {Component} from 'react';
import Navbar from '../navbar';
require('./style.css');

export default class Header extends Component {
	render() {
		return (
			<div className='header'>
				<Navbar/>
				<img src='assets/b_.svg' alt='b_'/>
			</div>
		);
	}
}
