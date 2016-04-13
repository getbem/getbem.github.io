export default (state) => {
	const {url} = state;

	return (
		<div className="navbar">
			<div className="container">
				<div className="navbar__menu">
					<ul>
						<li className="navbar__item--title"><a href="/">Get BEM</a></li>
						<li className={url === '/introduction/' ? 'navbar__item--active' : ''}><a href="/introduction/">Introduction</a></li>
						<li className={url === '/naming/' ? 'navbar__item--active' : ''}><a href="/naming/">Naming</a></li>
						<li className={url === '/faq/' ? 'navbar__item--active' : ''}><a href="/faq/">FAQ</a></li>
					</ul>
				</div>
			</div>
		</div>
	);
};
