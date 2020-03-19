var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('../config').js;

gulp.task('webpack', ()=>{
  return gulp.src(config.src)
  .pipe(webpack(require('./webpack.config.js')))
  .pipe(gulp.dest(config.dest))
})
