import React, {Component} from 'react';

export default class App extends Component {
	render() {
		return (
			<Header>
				<Drawer title="Get BEM">
					<a href='#/introduction'>Introduction</a>
					<a href='#/naming'>Naming</a>
					<a href='#/faq'>FAQ</a>
					<a href='http://github.com/getbem/getbem.com'>GitHub</a>
				</Drawer>
				<Title>Get BEM</Title>
				<NavMenu>
					<a href='#/introduction'>Introduction</a>
					<a href='#/naming'>Naming</a>
					<a href='#/faq'>FAQ</a>
					<a href='http://github.com/getbem/getbem.com'>GitHub</a>
				</NavMenu>
				<BLogo/>
			</Header>
			<Advantage color='green' title='Easy'>
				To use BEM you literally do not need nothing besides BEM naming.
			</Advantage>
			<Advantage color='blue' title='Modular'>
				Independent blocks and css selectors plus layer system makes your code reusable and modular.
			</Advantage>
			<Advantage color='red' title='Flexible'>
				Methodology and tools, that can be recomposed and configured in the way you like BEM.
			</Advantage>
			<GridLayout>
				<ReadMore key={1}></ReadMore>
				<Naming key={2}></Naming>
				<FAQ key={3}></FAQ>
			</GridLayout>
			<Companies>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'><img src='/assets/companies/yandex.svg'></img></a>
				<a href='http://yandex.com'>Add our company</a>
			</Companies>
			<Social></Social>
			<Footer></Footer>
		);
	}
}
