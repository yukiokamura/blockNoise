var gulp = require('gulp');
var watch = require('gulp-watch');
var config = require('../config').watch;

gulp.task('watch', function () {

	watch(config.ejs,function(){
		gulp.start(['ejs']);
	});

	watch(config.sass,function(){
		gulp.start(['sass']);
	});

	watch(config.dest,()=>{
		gulp.start(['bs-reload']);
	})
});
