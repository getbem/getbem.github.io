const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const DedupePlugin = webpack.optimize.DedupePlugin;
const DefinePlugin = webpack.DefinePlugin;
const NoErrorsPlugin = webpack.NoErrorsPlugin;
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	entry: {
		index: './src/index',
		introduction: './src/introduction',
		naming: './src/naming',
		faq: './src/faq'
	},
	output: {
		path: path.join(__dirname, '/static'),
		filename: '[name].js',
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
		new NoErrorsPlugin(),
		new CommonsChunkPlugin('commons.chunk.js'),
		new ExtractTextPlugin('css/[name].css')
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'src')
		}, {
			test: /\.css$/,
			loader: ExtractTextPlugin.extract('style-loader','css-loader!autoprefixer-loader')
		}, {
			test: /\.png$/,
			loader: 'url-loader?limit=100000'
		}, {
			test: /\.jpg$/,
			loader: 'file-loader'
		}, {
			test: /\.md$/,
			loader: 'html!markdown'
		}, {
			test: /\.less$/,
			loader: ExtractTextPlugin.extract('style-loader','css-loader!less-loader')
		}]
	}
};
