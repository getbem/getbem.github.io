const path = require('path');
const webpack = require('webpack');

function devEntry(entry) {
	return [
		'webpack-dev-server/client?http://localhost:3000',
		'webpack/hot/only-dev-server',
		entry
	];
}

module.exports = {
	devtool: 'eval',
	entry: {
		index: devEntry('./site/index'),
		introduction: devEntry('./site/introduction'),
		naming: devEntry('./site/naming'),
		faq: devEntry('./site/faq')
	},
	output: {
		path: path.join(__dirname, 'static'),
		filename: '[name].js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			loaders: ['react-hot', 'babel'],
			include: path.join(__dirname, 'site')
		}, {
			test: /\.css$/,
			loader: 'style-loader!css-loader!autoprefixer-loader'
		}, {
			test: /\.png$/,
			loader: 'url-loader?limit=100000'
		}, {
			test: /\.jpg$/,
			loader: 'file-loader'
		}, {
			test: /\.md$/,
			loader: 'html!markdown'
		}]
	}
};
