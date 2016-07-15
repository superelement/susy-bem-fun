var gulp = require('gulp')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')

var fs = require('fs')
var path = require('path')

gulp.task('sass', function() {
  gulp.src('app/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('bld/'))
})