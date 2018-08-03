var gulp = require('gulp'),
	modernizr = require('gulp-modernizr');


gulp.task('modernizr', function() {
	return gulp.src(['./site/dev/source/styles/**/*.css', './site/dev/source/scripts/**/*.js'])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./site/dev/tmpsrc/scripts/'));
});