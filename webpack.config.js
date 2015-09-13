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
		index: devEntry('./src/index'),
		introduction: devEntry('./src/introduction'),
		naming: devEntry('./src/naming'),
		faq: devEntry('./src/faq')
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
			include: path.join(__dirname, 'src')
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
		}, {
			test: /\.less$/,
			loader: 'style!css!less'
		}]
	}
};
