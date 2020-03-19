var gulp = require("gulp");
var concat = require("gulp-concat");
var config = require('../config').concat;

gulp.task("concat", function() {
  var files = config.libs;
  gulp.src(files)
    .pipe(concat('lib.js'))
    .pipe(gulp.dest(config.dest));
});
