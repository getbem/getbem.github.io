import React, {Component} from 'react';
require('./style.less');

export class Panel extends Component {
	render() {
		return (
			<div className={'panel ' + this.props.className}>
				<div className='panel__container'>
					<a href={this.props.link}><img src={this.props.img}/></a>
					<h2><a href={this.props.link}>{this.props.title}</a></h2>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export class IntroductionPanel extends Panel {
	render() {
		return (
			<Panel className='panel--introduction' title='Introduction' link='/introduction/' img='/assets/ic_book_white_24px.svg'>
				<p>BEM is a highly useful, powerful and simple naming convention to make your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit and a lot more strict.</p>
			</Panel>
		);
	}
}

export class NamingPanel extends Panel {
	render() {
		return (
			<Panel className='panel--naming' title='Naming' link='/naming/' img='/assets/ic_text_format_white_24px.svg'>
				<p>The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using proper naming will prepare you for the changes in design of the website.</p>
			</Panel>
		);
	}
}

export class QuestionsPanel extends Panel {
	render() {
		return (
			<Panel className='panel--questions' title='FAQ' link='/faq/' img='/assets/ic_question_answer_white_24px.svg'>
				<p><i>— <a href='/faq/#custom-tags-for-blocks'>Why do I need CSS classes for block instead of using semantic custom tags?</a></i></p>
				<p><i>— <a href='/faq/#encapsulating-tag-selector'>Can I combine a tag and a class in selector like button.button?</a></i></p>
				<br/>
				<p>Look for answers in awesome <a href='/faq/'>FAQ list</a>!</p>
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
						<li><a href='https://yandex.com' title='Yandex'><img src='/assets/companies/yandex.png'/></a></li>
						<li><a href='http://www.jetbrains.com' title='JetBrains'><img src='/assets/companies/jetbrains.png'/></a></li>
						<li><a href='http://factory.mn' title='Manufactura'><img src='/assets/companies/manufactura.png'/></a></li>
						<li><a href='http://eu.ideus.biz' title='iDeus'><img src='/assets/companies/ideus.png'/></a></li>
						<li><a href='http://alfabank.com' title='Alfa-Bank'><img src='/assets/companies/alfabank.png'/></a></li>
						<li><a href='http://edster.ru' title='Edster'><img src='/assets/companies/edster.png'/></a></li>
						<li><a href='http://www.wimdu.com' title='Wimdu'><img src='/assets/companies/wimdu.png'/></a></li>
						<li><a href='http://megafon.com' title='Megafon'><img src='/assets/companies/megafon.svg'/></a></li>
						<li><a href='http://decaf.de' title='Decaf'><img src='/assets/companies/decaf.png'/></a></li>
						<li><a className='panel--companies__add-button' href='https://github.com/getbem/getbem.com/issues/1' title='Add your company'><img src='/assets/ic_add_circle_outline_white_24px.svg'/></a></li>
					</ul>
				</div>
			</div>
		);
	}
}
