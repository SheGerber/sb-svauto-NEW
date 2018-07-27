var gulp = require('gulp'),
	svgSprite = require('gulp-svg-sprite'),
	rename = require('gulp-rename'),
	del = require('del'),
	svg2png = require('gulp-svg2png');


var config = {
	shape: {
		spacing: {
			padding: 1
		}
	},
	mode: {
		css: {
			variables: {
				replaceSVGwPNG: function() {
					return function(sprite, render) {
						return render(sprite).split('.svg').join('.png');
					}
				}
			},
			sprite: 'sprite.svg',
			render: {
				css: {
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}


gulp.task('spriteClean', function() {
	return del(['./site/temp/sprites', './site/source/images/sprites'])
});


gulp.task('createSpriteSVG', ['spriteClean'], function() {
	return gulp.src('./site/source/images/icons/**/*.svg')
		.pipe(svgSprite(config))
		.pipe(gulp.dest('./site/temp/sprites/'));
});


gulp.task('createPNGcopy', ['createSpriteSVG'], function() {
	return gulp.src('./site/temp/sprites/css/*.svg')
		.pipe(svg2png())
		.pipe(gulp.dest('./site/temp/sprites/css'));
});


gulp.task('copySprites', ['createPNGcopy'], function() {
	return gulp.src('./site/temp/sprites/css/**/*.{svg,png}')
		.pipe(gulp.dest('./site/source/images/sprites'));
});


gulp.task('copySpriteCSS', ['createSpriteSVG'], function() {
	return gulp.src('./site/temp/sprites/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./site/source/styles/main'));
});


gulp.task('endSpriteClean', ['copySprites', 'copySpriteCSS'], function() {
	return del('./site/temp/sprites');
});


gulp.task('createIcons', ['spriteClean', 'createSpriteSVG', 'createPNGcopy', 'copySprites', 'copySpriteCSS', 'endSpriteClean']);

