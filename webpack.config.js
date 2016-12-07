const webpack = require('webpack');
module.exports = {
	devtool: 'inline-source-map',
	entry : [
		'babel-polyfill',
		'./src/app.js',
		'webpack-dev-server/client?http://localhost:8080'
		],
	output : {
		path : './bin',
		filename : 'app.bundle.js'
	},
	devServer : {
		contentBase : './src'
	},
	module : {
		loaders: [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				loader : 'babel-loader'
			}
		]
	},
	plugins : [
		new webpack.optimize.UglifyJsPlugin({
			compress : {
				warninga : false
			},
			output : {
				comments : false
			}
		})
	]
}
