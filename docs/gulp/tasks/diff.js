var gulp = require('gulp');
var runSequence = require('run-sequence');
var cache = require('gulp-cached');
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
var fs = require('fs');

gulp.task('copy',()=>{
  console.log('copy');
  fs.stat('./bk/'+y+m+d, (error, stats) => {
    if (error) {
      if (error.code === 'ENOENT') {
        cache.caches.bk = '';
        return gulp.src('./dist/**/*')
        .pipe(cache('bk'))
        .pipe(gulp.dest('./bk/'+y+m+d+'/dist/'));
      }
    }else{
      return;
    }
  })
})



gulp.task('diff',()=>{
  return gulp.src('./dist/**/*')
  .pipe(cache('bk'))
  .pipe(gulp.dest('./diff/'+y+m+d+'/'))
})
