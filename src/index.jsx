require('./index.less');

import React, {Component} from 'react';
import Header from './header';
import Description from './description';
import Advantage from './advantage';
import Footer from './footer';
import {IntroductionPanel, NamingPanel, QuestionsPanel, CompaniesPanel} from './panels';
import {Grid, Cell} from 'rgx';

export default class Index extends Component {
	 render() {
 		return (
			<div>
				<Header/>
				<div className='index'>
					<Description/>
					<div style={{marginLeft: 'auto', marginRight: 'auto', maxWidth: 1035, paddingBottom: 150}}>
						<Grid gutter={0}>
							<Cell min={256}>
								<Advantage title='Easy' color='block'>To use BEM you literally do not need nothing besides BEM naming.</Advantage>
							</Cell>
							<Cell min={256}>
								<Advantage title='Modular' color='element'>Independent blocks and css selectors makes your code reusable and modular.</Advantage>
							</Cell>
							<Cell min={256}>
								<Advantage title='Flexible' color='modifier'>Methodology and tools, that can be recomposed and configured in the way you like BEM.</Advantage>
							</Cell>
						</Grid>
					</div>
					<IntroductionPanel/>
					<NamingPanel/>
					<QuestionsPanel/>
					<CompaniesPanel/>
				</div>
				<Footer/>
			</div>
		)
	}
}

React.render(<Index></Index>, document.getElementById('root'));
