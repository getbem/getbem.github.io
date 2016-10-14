export default () => (
	<div className="index">
		<div className="description">
			BEM — Block Element Modifier is a methodology that helps you to create reusable components and code sharing in front-end development
		</div>
		<div className="container" style={{marginBottom: '50px'}}>
			<div className="row">
				<div className="column">
					{advantage({title: 'Easy', color: 'block', text: 'To use BEM, you only need to employ BEM’s naming convention.'})}
				</div>
				<div className="column">
					{advantage({title: 'Modular', color: 'element', text: 'Independent blocks and CSS selectors make your code reusable and modular.'})}
				</div>
				<div className="column">
					{advantage({title: 'Flexible', color: 'modifier', text: 'Using BEM, methodologies and tools can be recomposed and configured the way you like.'})}
				</div>
			</div>
		</div>
		{introductionPanel()}
		{namingPanel()}
		{questionsPanel()}
		{companiesPanel()}
	</div>
);

function advantage({title, color, text}) {
	return (
		<div className={`advantage advantage--${color}`}>
			<h2>{title}</h2>
			<div>{text}</div>
		</div>
	);
}

function panel({type, title, link, img, children}) {
	return (
		<div className={`panel panel--${type}`}>
			<div className="panel__container">
				<a href={link}><img src={img}/></a>
				<h2><a href={link}>{title}</a></h2>
				{children}
			</div>
		</div>
	);
}

function introductionPanel() {
	return panel({
		type: 'introduction',
		title: 'Introduction',
		link: '/introduction/',
		img: '/assets/ic_book_white_24px.svg',
		children: (
			<p>BEM is a highly useful, powerful, and simple naming convention that makes your front-end code easier to read and understand, easier to work with, easier to scale, more robust and explicit, and a lot more strict.</p>
		)
	});
}

function namingPanel() {
	return panel({
		type: 'naming',
		title: 'Naming',
		link: '/naming/',
		img: '/assets/ic_text_format_white_24px.svg',
		children: (
			<p>The BEM approach ensures that everyone who participates in the development of a website works with a single codebase and speaks the same language. Using BEM’s proper naming convention will better prepare you for design changes made to your website.</p>
		)
	});
}

function questionsPanel() {
	return panel({
		type: 'questions',
		title: 'FAQ',
		link: '/faq/',
		img: '/assets/ic_question_answer_white_24px.svg',
		children: (
			<div>
				<p><i>— <a href="/faq/#custom-tags-for-blocks">Why do I need CSS classes for block instead of using semantic custom tags?</a></i></p>
				<p><i>— <a href="/faq/#encapsulating-tag-selector">May I combine a tag and a class in a selector, such as button.button?</a></i></p>
				<br/>
				<p>Look for answers in the awesome <a href="/faq/">FAQ list</a>!</p>
			</div>
		)
	});
}

function companiesPanel() {
	return (
		<div className="panel panel--companies">
			<div className="panel__container">
				<h2>Companies using BEM</h2>
				<ul>
					<li><a href="https://yandex.com" title="Yandex"><img src="/assets/companies/yandex.png"/></a></li>
					<li><a href="http://www.jetbrains.com" title="JetBrains"><img src="/assets/companies/jetbrains.png"/></a></li>
					<li><a href="http://factory.mn" title="Manufactura"><img src="/assets/companies/manufactura.png"/></a></li>
					<li><a href="http://eu.ideus.biz" title="iDeus"><img src="/assets/companies/ideus.png"/></a></li>
					<li><a href="http://alfabank.com" title="Alfa-Bank"><img src="/assets/companies/alfabank.png"/></a></li>
					<li><a href="http://edster.ru" title="Edster"><img src="/assets/companies/edster.png"/></a></li>
					<li><a href="http://www.wimdu.com" title="Wimdu"><img src="/assets/companies/wimdu.png"/></a></li>
					<li><a href="http://megafon.com" title="Megafon"><img src="/assets/companies/megafon.svg"/></a></li>
					<li><a href="http://decaf.de" title="Decaf"><img src="/assets/companies/decaf.png"/></a></li>
					<li><a href="http://epam.com" title="EPAM"><img src="/assets/companies/epam.svg"/></a></li>
					<li><a href="https://renuo.ch" title="Renuo"><img src="/assets/companies/renuo.png"/></a></li>
					<li><a className="panel--companies__add-button" href="https://github.com/getbem/getbem.com/issues/1" title="Add your company"><img src="/assets/ic_add_circle_outline_white_24px.svg"/></a></li>
				</ul>
			</div>
		</div>
	);
}
