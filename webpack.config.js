require('babel-register');

var getConfig = require('hjs-webpack');
var toHtml = require('vdom-to-html');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var app = require('./src/views/app').default;

const config = getConfig({
	in: 'src/main.js',
	out: 'public',
	clearBeforeBuild: true,
	html: function (context) {
		function render(state) {
			return context.defaultTemplate({
				title: 'BEM — Block Element Modifier',
				metaTags: {
					description: 'BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.',
					tags: 'BEM, HTML, CSS, JS, JavaScript, framework, front-end, frontend, web development, code sharing, components, blocks, react, webpack',
					author: 'Vsevolod Strukchinsky, Vladimir Starkov and contributors',
					'twitter:card': 'summary',
					'twitter:site': '@getbem',
					'og:image': 'http://getbem.com/assets/bem_black.png',
					'og:url': 'http://getbem.com/',
					'og:title': 'BEM — Block Element Modifier',
					'og: description': 'BEM — Block Element Modifier is a methodology, that helps you to achieve reusable components and code sharing in the front-end.'
				},
				head: [
					'<link rel="icon" type="image/png" href="/assets/favicon.png"/>'
				],
				html: toHtml(app(state))
			});
		}

		return {
			'index.html': render({url: '/'}),
			'introduction/index.html': render({url: '/introduction/'}),
			'naming/index.html': render({url: '/naming/'}),
			'faq/index.html': render({url: '/faq/'})
		};
	}
});

config.plugins.push(
	new CopyWebpackPlugin([{from: './src/assets', to: 'assets'}])
);

module.exports = config;
