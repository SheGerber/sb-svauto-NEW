var gulp = require('gulp'),
	watch = require('gulp-watch'),
	browserSync = require('browser-sync').create();



gulp.task('watch', function(){

	browserSync.init({
		notify: false,
		server: {
			baseDir: "site"
		}
	})

	watch('./site/index.html', function(){
    	browserSync.reload();
	});

	watch('./site/source/styles/**/*.css', function(){
		gulp.start('cssInject');
	});

	watch('./site/source/scripts/**/*.js', function(){
		gulp.start('refreshJS');
	});

});


gulp.task('cssInject', ['createCSS'], function() {
	return gulp.src('./site/temp/styles/style.css')
		.pipe(browserSync.stream());
});


gulp.task('refreshJS', ['createJS'], function(){
    browserSync.reload();
});