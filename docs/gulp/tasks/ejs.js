var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config').ejs;
var cache = require('gulp-cached');
var now = new Date();
var y = now.getFullYear();
var m = now.getMonth() + 1;
var d = now.getDate();
var fs = require('fs');
var develop = {
  'ejs':config.src,
  'data': './src/ejs/assets/'
}

var release = {
  'html': config.dest
}
var fs = require('fs');

gulp.task('ejs',function(){
  const bkfile = './bk/'+y+m+d+'/dist';
  gulp.src(config.src, {base: './src/'})
    .pipe($.plumber())
    .pipe($.data(file=>{
      return{
        'filename':file.path
      }
    }))
    .pipe($.ejs({
      site: JSON.parse(fs.readFileSync(develop.data + 'site.json'))
      },
      {ext: '.html'}))
    .pipe($.rename({extname:'.html'}))
    .pipe(gulp.dest(config.dest))
});
