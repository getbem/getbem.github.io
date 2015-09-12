import React, {Component} from 'react';
require('./style.less');

export default class Advantage extends Component {
	render() {
		return (
			<div className={'advantage advantage--' + this.props.color}>
				<h2>{this.props.title}</h2>
				<div>{this.props.children}</div>
			</div>
		);
	}
}
