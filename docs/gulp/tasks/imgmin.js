var gulp     = require('gulp');
var imagemin = require('gulp-imagemin');
var imageminJpg = require('imagemin-jpeg-recompress');
var imageminPng = require('imagemin-pngquant');
var config = require('../config').imgmin;


gulp.task('imagemin', function(){
    gulp.src(config.src)
    .pipe(imagemin([
        imageminPng(),
        imageminJpg(),
    ]
    ))
    .pipe(gulp.dest( config.dest));
});
