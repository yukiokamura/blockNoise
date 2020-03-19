const gulp = require('gulp');
const babel = require('gulp-babel');
var config = require('../config').js;
const uglify = require('gulp-uglify');
var saveLicense = require('uglify-save-license');
gulp.task('babel', () =>{
  return  gulp.src(config.src)
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify({output: {comments: saveLicense}}))
        .pipe(gulp.dest(config.dest))
});
