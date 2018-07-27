var gulp = require('gulp'),
	modernizr = require('gulp-modernizr');


gulp.task('modernizr', function() {
	return gulp.src(['./site/source/styles/**/*.css', './site/source/scripts/**/*.js'])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./site/temp/scripts/'));
});