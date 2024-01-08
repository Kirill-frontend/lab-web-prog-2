'use strict'

import gulp from 'gulp';
import * as dartSass from 'sass';
import gulpSass from 'gulp-sass';

import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';


const sass = gulpSass(dartSass);

function compileSass() {
  return gulp
    .src('styles/*.sass') 
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('styles/css')) 
    .pipe(cleanCSS()) 
    .pipe(rename({ suffix: '.min' })) 
    .pipe(gulp.dest('styles/css'));
}

function watchSass() {
  gulp.watch('sass/*.scss', compileSass);
}

gulp.task('default', gulp.series(compileSass));