import React, {Component} from 'react';
import colors from '../colors';
require('./style.css');

export default class Advantage extends Component {
	render() {
		return (
			<div className='advantage'>
				<h2 style={{color: colors[this.props.color]}}>{this.props.title}</h2>
				<div>{this.props.children}</div>
			</div>
		);
	}
}
