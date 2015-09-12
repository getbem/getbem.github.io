import React, {Component} from 'react';
require('./style.css');

export class Panel extends Component {
	render() {
		return (
			<div className={'panel ' + this.props.className}>
				<div className='panel__container'>
					<h2><a href={this.props.link}>{this.props.title}</a></h2>
					<img src={this.props.img}/>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export class IntroductionPanel extends Panel {
	render() {
		return (
			<Panel className='panel--introduction' title='Introduction' link='/introduction.html' img='assets/ic_book_white_24px.svg'>
				<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>
			</Panel>
		);
	}
}

export class NamingPanel extends Panel {
	render() {
		return (
			<Panel className='panel--naming' title='Naming' link='/naming.html' img='assets/ic_text_format_white_24px.svg'>
				<p>It is known fact, that the right styleguide can significantly increase development speed, debugging and implementing new features in legacy code. Sadly, most CSS codebase is developed without (sometimes) any structure and naming conventions. This leads to an unmaintainable CSS codebase in the long term.</p>
			</Panel>
		);
	}
}

export class QuestionsPanel extends Panel {
	render() {
		return (
			<Panel className='panel--questions' title='FAQ' link='/faq.html' img='assets/ic_question_answer_white_24px.svg'>
				<p>On smaller brochure sites, how you organize your styles isn’t usually a big concern. You get in there, write some CSS, or maybe even some SASS. You compile it all into a single stylesheet with SASS’s production settings, and then you aggregate it to get all the stylesheets from modules into a nice tidy package.</p>
			</Panel>
		);
	}
}

export class CompaniesPanel extends Component {
	render() {
		return (
			<div className='panel panel--companies'>
				<div className='panel__container'>
					<h2>Companies</h2>
					<ul>
						<li><a href='https://yandex.com' title='Yandex'><img src='assets/companies/yandex.png'/></a></li>
						<li><a href='http://www.jetbrains.com' title='JetBrains'><img src='assets/companies/jetbrains.png'/></a></li>
						<li><a href='http://factory.mn' title='Manufactura'><img src='assets/companies/manufactura.png'/></a></li>
						<li><a href='http://eu.ideus.biz' title='iDeus'><img src='assets/companies/ideus.png'/></a></li>
						<li><a href='http://alfabank.com' title='Alfa-Bank'><img src='assets/companies/alfabank.png'/></a></li>
						<li><a href='http://edster.ru' title='Edster'><img src='assets/companies/edster.png'/></a></li>
						<li><a href='http://www.wimdu.com' title='Wimdu'><img src='assets/companies/wimdu.png'/></a></li>
						<li><a href='http://megafon.com' title='Megafon'><img src='assets/companies/megafon.svg'/></a></li>
						<li><a href='http://decaf.de' title='Decaf'><img src='assets/companies/decaf.png'/></a></li>
						<li><a className='panel--companies__add-button' href='https://github.com/getbem/getbem.com/issues/1' title='Add your company'><img src='assets/ic_add_circle_outline_white_24px.svg'/></a></li>
					</ul>
				</div>
			</div>
		);
	}
}
