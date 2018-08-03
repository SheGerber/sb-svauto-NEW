var path = require('path');

module.exports = {
	mode: 'development',
	entry: {
		Main: "./site/dev/source/scripts/Main.js", 
		ThirdParty: "./site/dev/source/scripts/ThirdParty.js"
	},
	output: {
		path: path.resolve(__dirname, "./site/dev/tmpsrc/scripts"),
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