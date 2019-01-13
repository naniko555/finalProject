'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src(['style/scss/style-product-cart.scss','style/scss/style-product.scss','style/scss/syle-product-details.scss','style/scss/style-product-main.scss'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});
 
gulp.task('watch', function () {
  gulp.watch(['style/scss/style-product-cart.scss','style/scss/style-product.scss','style/scss/syle-product-details.scss','style/scss/style-product-main.scss'], 
  gulp.parallel('sass'));
}); 