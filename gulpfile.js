var gulp = require('gulp'),
	browserSync = require('browser-sync'),
	sass = require('gulp-sass');

var sassPath = './src/sass/*.*',
	tranformedCssPath = './dist/css/';

gulp.task('sass', function() {
	return gulp.src(sassPath)
		.pipe(sass({outputStyle: 'compat'})
			.on('error', sass.logError))
		.pipe(gulp.dest(tranformedCssPath))
})

gulp.task('watch', function () {
	gulp.watch(sassPath, ['sass'])
})

gulp.task('default', ['sass', 'watch'])