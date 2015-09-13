import React, {Component} from 'react';

export default class Markdown extends Component {
	render() {
		return (
			<div className='markdown' dangerouslySetInnerHTML={{__html: this.props.children}}></div>
		);
	}
}
