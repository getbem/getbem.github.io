const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	hot: true,
	stats: {colors: true},
	inline: true
}).listen(3000, 'localhost', function (err) {
	if (err) {
		console.error(err);
		return;
	}

	console.log('Listening at localhost:3000');
});
