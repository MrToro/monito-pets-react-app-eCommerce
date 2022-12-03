const { src, dest, watch, series } = require('gulp');

const imageResize = require('gulp-image-resize');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const avif = require('gulp-avif');

function resize() {
	return src('src/images/main_hero.png')
		.pipe(
			imageResize({
				percentage: 35,
			})
		)
		.pipe(dest('src/images/compressed'));
}

function images() {
	return src('src/images/**/*')
		.pipe(
			imagemin([
				imagemin.gifsicle({ interlaced: true }),
				imagemin.mozjpeg({ quality: 20, progressive: true }),
				imagemin.optipng({ optimizationLevel: 3 }),
				imagemin.svgo({
					plugins: [{ removeViewBox: true }, { cleanupIDs: false }],
				}),
			])
		)
		.pipe(dest('src/assets'));
}

function convertToWebp() {
	const options = {
		quality: 50,
	};

	return src('src/images/**/*.{png,jpg}').pipe(webp(options)).pipe(dest('src/assets'));
}

function convertToAvif() {
	const options = {
		quality: 50,
	};

	return src('src/images/**/*.{png,jpg}').pipe(avif(options)).pipe(dest('src/assets'));
}

function dev() {
	watch('src/images/**/*', images);
	watch('src/images/**/*', convertToWebp);
	watch('src/images/**/*', convertToAvif);
}

exports.dev = dev;
exports.resize = resize;
exports.images = images;
exports.convertToWebp = convertToWebp;
exports.convertToAvif = convertToAvif;
exports.default = series(images, convertToWebp, convertToAvif);
