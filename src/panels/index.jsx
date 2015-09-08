import React, {Component} from 'react';
require('./style.css');

export class IntroductionPanel extends Component {
	render() {
		return (
			<div className='panel panel--introduction'>
				<h2><a href='/introduction'>Introduction</a></h2>
				<img src='assets/introduction-panel.png'/>
				<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>
			</div>
		);
	}
}

export class NamingPanel extends Component {
	render() {
		return (
			<div className='panel panel--naming'>
				<h2><a href='/naming'>Naming</a></h2>
				<img src='assets/introduction-panel.png'/>
				<p>It is known fact, that the right styleguide can significantly increase development speed, debugging and implementing new features in legacy code. Sadly, most CSS codebase is developed without (sometimes) any structure and naming conventions. This leads to an unmaintainable CSS codebase in the long term.</p>
			</div>
		);
	}
}

export class QuestionsPanel extends Component {
	render() {
		return (
			<div className='panel panel--questions'>
				<h2><a href='/faq'>FAQ</a></h2>
				<img src='assets/introduction-panel.png'/>
				<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>
			</div>
		);
	}
}

export class CompaniesPanel extends Component {
	render() {
		return (
			<div className='panel panel--companies'>
				<h2>Companies</h2>
				<ul>
					<li><a href='https://yandex.com' title='Yandex'><img src='assets/companies/yandex.png'/></a></li>
					<li><a href='http://www.jetbrains.com' title='JetBrains'><img src='assets/companies/jetbrains.png'/></a></li>
					<li><a href='http://factory.mn' title='Manufactura'><img src='assets/companies/manufactura.png'/></a></li>
					<li><a href='http://eu.ideus.biz' title='iDeus'><img src='assets/companies/ideus.png'/></a></li>
					<li><a href='http://alfabank.com' title='Alfa-Bank'><img src='assets/companies/alfabank.png'/></a></li>
					<li><a href='http://edster.ru' title='Edster'><img src='assets/companies/edster.png'/></a></li>
					<li><a href='http://www.wimdu.com' title='Wimdu'><img src='assets/companies/wimdu.png'/></a></li>
				</ul>
			</div>
		);
	}
}
