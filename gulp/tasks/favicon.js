var gulp = require('gulp'),
	del = require('del'),
	toico = require('gulp-to-ico');



gulp.task('faviconClean', function() {
	return del('./site/dev/source/images/favicons/*.ico')
});


gulp.task('createFaviconICO', ['faviconClean'], function() {
	return gulp.src(['./site/dev/source/images/favicons/favicon-16.png', 
		'./site/dev/source/images/favicons/favicon-32.png',
		'./site/dev/source/images/favicons/favicon-48.png'])
		.pipe(toico('favicon.ico', { resize: true, sizes: [16, 32, 48] }))
		.pipe(gulp.dest('./site/dev/source/images/favicons'));
});


gulp.task('createLargeICO', ['faviconClean'],  function() {
	return gulp.src(['./site/dev/source/images/favicons/favicon-16.png', 
		'./site/dev/source/images/favicons/favicon-24.png',
		'./site/dev/source/images/favicons/favicon-32.png',
		'./site/dev/source/images/favicons/favicon-48.png',
		'./site/dev/source/images/favicons/favicon-64.png'])
		.pipe(toico('faviconLrg.ico', { resize: true, sizes: [16, 24, 32, 48, 64] }))
		.pipe(gulp.dest('./site/dev/source/images/favicons'));
});


gulp.task('createFavicons',
	['faviconClean', 'createFaviconICO', 'createLargeICO']);