import React, {Component} from 'react';

export default class App extends Component {
	render() {
		return (
			<div className="layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
			  <header className="mdl-layout__header mdl-layout__header--transparent">
			    <div className="mdl-layout__header-row">
			      <span className="mdl-layout-title">Get BEM</span>
			    </div>

			    <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
			      <a href="#scroll-tab-1" className="mdl-layout__tab">Introduction</a>
			      <a href="#scroll-tab-2" className="mdl-layout__tab">Naming</a>
			      <a href="#scroll-tab-3" className="mdl-layout__tab">FAQ</a>
			    </div>
			  </header>
			  <div className="mdl-layout__drawer">
			    <span className="mdl-layout-title">Get BEM</span>
			  </div>
			  <main className="mdl-layout__content">
			    <section className="mdl-layout__tab-panel" id="scroll-tab-1">
			      <div className="page-content">Introduction</div>
			    </section>
			    <section className="mdl-layout__tab-panel" id="scroll-tab-2">
			      <div className="page-content">Naming</div>
			    </section>
			    <section className="mdl-layout__tab-panel" id="scroll-tab-3">
			      <div className="page-content">FAQ</div>
			    </section>
			  </main>
			</div>
		);
	}
}
