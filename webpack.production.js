const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const DefinePlugin = webpack.DefinePlugin;
const NoErrorsPlugin = webpack.NoErrorsPlugin;

module.exports = {
	entry: './src/index',
	output: {
		path: path.join(__dirname, 'static'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new UglifyJsPlugin({compress: {warnings: false}}),
		new DedupePlugin(),
		new DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('production')
			}
		}),
		new NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['babel'],
			include: path.join(__dirname, 'src')
		}]
	}
};
