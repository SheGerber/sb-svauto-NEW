var gulp = require('gulp'),
	toico = require('gulp-to-ico');



gulp.task('faviconClean', function() {
	return del(['./site/temp/favicon', './site/source/images/favicon'])
});


gulp.task('favicon', function() {
	return gulp.src(['./site/source/images/favicons/favicon-16.png', 
		'./site/source/images/favicons/favicon-32.png',
		'./site/source/images/favicons/favicon-48.png'])
		.pipe(ico('favicon.ico', { resize: true, sizes: [16, 32, 48] }))
		.pipe(gulp.dest('./site/source/images/favicons'));
});


gulp.task('faviconLarge', function() {
	return gulp.src(['./site/source/images/favicons/favicon-16.png', 
		'./site/source/images/favicons/favicon-24.png',
		'./site/source/images/favicons/favicon-32.png',
		'./site/source/images/favicons/favicon-48.png',
		'./site/source/images/favicons/favicon-64.png'])
		.pipe(ico('faviconLrg.ico', { resize: true, sizes: [16, 24, 32, 48, 64] }))
		.pipe(gulp.dest('./site/source/images/favicons'));
});