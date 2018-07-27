var gulp = require('gulp'),
	webpack = require('webpack');


gulp.task('createJS', ['modernizr'], function(callback) {
	webpack(require('../../webpack.config.js'), function(err, stats) {
		if (err) {
			console.log(err.toString());
		}
		console.log(stats.toString());
		callback();
	});
});