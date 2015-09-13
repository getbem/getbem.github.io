import React, {Component} from 'react';
require('./style.css');

export default class Widgets extends Component {
	render() {
		return (
			<div className='widgets'>
				<iframe src='https://ghbtns.com/github-btn.html?user=getbem&repo=getbem.com&type=star&count=true&size=large' frameBorder='0' scrolling='0' width='130px' height='30px'></iframe>
			</div>
		);
	}
}
