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
			'about.html': render({url: '/about'}),
			'about/index.html': render({url: '/about'}),
			'index.html': render({url: '/'})
		};
	}
});

config.plugins.push(
	new CopyWebpackPlugin([{from: './src/assets', to: 'assets'}])
);

module.exports = config;
