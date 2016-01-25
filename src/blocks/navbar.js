export default (state) => (
	<div className="navbar">
		<div className="container">
			<div className="navbar__menu">
				<ul>
					<li className="navbar__item--title"><a href="/">Get BEM</a></li>
					<li className={state.active === 'introduction' ? 'navbar__item--active' : ''}><a href="/introduction/">Introduction</a></li>
					<li className={state.active === 'naming' ? 'navbar__item--active' : ''}><a href="/naming/">Naming</a></li>
					<li className={state.active === 'faq' ? 'navbar__item--active' : ''}><a href="/faq/">FAQ</a></li>
				</ul>
			</div>
		</div>
	</div>
);
