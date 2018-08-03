var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();



gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "site/dev"
		}
	})

	watch('./site/dev/index.html', function(){
    	browserSync.reload();
	});

	watch('./site/dev/source/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./site/dev/source/scripts/**/*.js', function(){
		gulp.start('refreshJS');
	});

});


gulp.task('cssInject', ['createCSS'], function() {
	return gulp.src('./site/dev/tempsrc/styles/style.css')
		.pipe(browserSync.stream());
});


gulp.task('refreshJS', ['createJS'], function(){
    browserSync.reload();
});