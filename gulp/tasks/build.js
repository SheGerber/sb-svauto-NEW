var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	del = require('del'),
	usemin = require('gulp-usemin'),
	rev = require('gulp-rev'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	replace = require('gulp-replace'),
	browserSync = require('browser-sync').create();


gulp.task('delLiveFolder', ['createIcons'], function() {
	return del('./site/live');
});


gulp.task('copyOtherFiles', ['delLiveFolder'], function() {
	var dirsToCopy = [
		'./site/dev/**/*',
		'!./site/dev/*.html',
		'!./site/dev/source',
		'!./site/dev/source/**',
		// '!./site/dev/source/images/**',
		// '!./site/dev/source/styles/**',
		// '!./site/dev/source/scripts/**',
		'!./site/dev/tmpsrc',
		'!./site/dev/tmpsrc/**'
	]

	return gulp.src(dirsToCopy)
		.pipe(gulp.dest('./site/live'));
});


gulp.task('optimizeImgs', ['delLiveFolder'], function() {
	return gulp.src(['./site/dev/source/images/**/*', 
		'!./site/dev/source/images/svgs', 
		'!./site/dev/source/images/svgs/**/*'])
		.pipe(imagemin({
			progressive: true,
			interlaced: true,
			multipass: true
		}))
		.pipe(gulp.dest("./site/live/src/images"));
});

gulp.task('useminTrig', ['delLiveFolder'], function() {
	gulp.start('usemin');
});


gulp.task('usemin', ['createCSS', 'createJS'], function(){
	return gulp.src('./site/dev/*.html')
		.pipe(usemin({
			css: [function() {return rev()}, function() {return cssnano()}],
			js: [function() {return rev()}, function() {return uglify()}]
		}))
		.pipe(replace('tmpsrc/', 'src/'))
		.pipe(gulp.dest('./site/live'));
});

gulp.task('copyImgsDev', ['createIcons'], function() {
	return gulp.src(['./site/dev/source/images/**/*', 
		'!./site/dev/source/images/svgs', 
		'!./site/dev/source/images/svgs/**/*'])
		.pipe(gulp.dest("./site/dev/tmpsrc/images"));
});



gulp.task('buildLive', ['delLiveFolder', 'copyOtherFiles', 'optimizeImgs', 'useminTrig']);

gulp.task('buildDev', ['createIcons', 'createCSS', 'createJS', 'copyImgsDev']);

gulp.task('previewLive', function() {
		browserSync.init({
		notify: false,
		server: {
			baseDir: "site/live"
		}
	})
});