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
