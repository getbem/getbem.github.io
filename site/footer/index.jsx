import React, {Component} from 'react';
import Widgets from '../widgets';
require('./style.css');

export default class Footer extends Component {
	render() {
		return (
			<div className='footer'>
				<Widgets/>
				<br/>
				<p>Brought to you by <a href='https://github.com/floatdrop'>@floatdrop</a> and <a href='https://twitter.com/iamstarkov'>@iamstarkov</a>.
				<br/>
				Maintained by the <a href='https://github.com/orgs/getbem/people'>core team</a> with the help of our <a href='https://github.com/getbem/getbem.com/graphs/contributors'>contributors</a>.<br/>
				Code licensed under <a href='https://github.com/getbem/getbem.com/blob/master/LICENSE.md'>MIT</a>, documentation under <a href='https://github.com/getbem/getbem.com/blob/master/levels/pages/LICENSE.md'>CC BY 3.0</a>.</p>
				<br/>
				<ul className='footer__links'>
					<li><a href='https://twitter.com/getbem'>Twitter</a></li>
					<li><a href='https://github.com/getbem/getbem.com/'>GitHub</a></li>
					<li><a href='https://github.com/getbem/getbem.com/issues'>Issues</a></li>
					<li><a href='https://github.com/getbem/getbem.com/issues/8'>Project goals</a></li>
					<li><a href='https://github.com/getbem/getbem.com/issues/1'>Are you using BEM?</a></li>
				</ul>
			</div>
		);
	}
}
