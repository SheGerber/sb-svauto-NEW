var path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		Main: "./site/source/scripts/Main.js", 
		ThirdParty: "./site/source/scripts/ThirdParty.js"
	},
	output: {
		path: path.resolve(__dirname, "./site/temp/scripts"),
		filename: "[name].js"
	},

	module: {
		rules: [
		  {
		  	loader: 'babel-loader',
		  	query: {
		  		presets: ['es2015']
		  	},
		  	test: /\.js$/,
		  	exclude: /node_modules/
		  }
		]
	}
}