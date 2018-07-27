var gulp = require('gulp'),
	autoprefixer = require('autoprefixer'),
	postcss = require('gulp-postcss'),
	cssimport = require('postcss-import'),
	mixins = require('postcss-mixins'),
	nested = require('postcss-nested'),
	cssvars = require('postcss-simple-vars'),
	hexrgba = require('postcss-hexrgba');


gulp.task('createCSS', function(){
	
	return gulp.src('./site/source/styles/style.css')
		.pipe(postcss([cssimport, mixins, cssvars, nested, hexrgba, autoprefixer]))
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./site/temp/styles'));

});

