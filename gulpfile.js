var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
const htmlmin = require('gulp-htmlmin');
var tinify = require('gulp-tinify');

gulp.task('min-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cssmin())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('bild/css/'))
})

gulp.task('minify', () => {
  return gulp.src('src/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('bild'));
});
gulp.task('move', () => {
  return gulp.src('src/*.ico')
    .pipe(gulp.dest('bild/'));
});
gulp.task('tinify', function () {
 return gulp.src('src/img/**/*')
    .pipe(tinify('XPkRb5vNFDXQc12s1H6NCVBY65r71nnV'))
    .pipe(gulp.dest('bild/img'));
});

gulp.task('build', gulp.series('min-css','minify','move','tinify'));