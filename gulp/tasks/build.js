var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync').create();


gulp.task('delLiveFolder', ['createIcons'], function() {
	return del('./live');
});


gulp.task('copyOtherFiles', ['delLiveFolder'], function() {
	var dirsToCopy = [
		'./site/**/*',
		'!./site/index.html',
		'!./site/source',
		'!./site/source/**',
		// '!./site/source/images/**',
		// '!./site/source/styles/**',
		// '!./site/source/scripts/**',
		'!./site/temp',
		'!./site/temp/**'
	]

	return gulp.src(dirsToCopy)
		.pipe(gulp.dest('./live'));
});


gulp.task('optimizeImgs', ['delLiveFolder'], function() {
	return gulp.src(['./site/source/images/**/*', '!./site/source/images/icons', '!./site/source/images/icons/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./live/images"));
});

gulp.task('useminTrig', ['delLiveFolder'], function() {
	gulp.start('usemin');
});


gulp.task('usemin', ['createCSS', 'createJS'], function(){
	return gulp.src('./site/index.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(gulp.dest('./live'));
});


gulp.task('buildLive', ['delLiveFolder', 'copyOtherFiles', 'optimizeImgs', 'useminTrig']);

gulp.task('buildDev', ['createIcons', 'createCSS', 'createJS']);

gulp.task('previewLive', function() {
		browserSync.init({
		notify: false,
		server: {
			baseDir: "live"
		}
	})
});