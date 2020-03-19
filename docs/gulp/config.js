/*******************

*******************/

var dest = './dist';
var src = './src';

var path = require('path');
var relativeSrcPath = path.relative('.', src);

var config = {
	project:'dist',
	dest:dest,
	src:src,
	watch:{
		dest:[dest+'/**/*'],
		sass:relativeSrcPath+'/**/*.scss',
		ejs:relativeSrcPath+'/**/*.ejs'
	},
	ejs:{
		dest:dest,
		src:[src+'/*.ejs',src+'/**/*.ejs','!src/ejs/_*.ejs','!src/ejs/**/_*.ejs']
	},
	sass:{
		dest:dest+'/assets/css',
		src:src+'/sass/*.scss',
		prefixer:{
	    browsers: [
	      'last 2 versions',
	      'ie >= 11',
	      'iOS >= 10',
	      'Android >= 5',
	    ],
	    grid: true,
	  },
		maps:'/maps',
		minify:false
	},
	js:{
		dest:dest+'/assets/js',
		src:dest+'/assets/js/app.js'
	},
	browser:{
		dir:'./dist/',
		index:'index.html'
	},
	opt:{
		js:dest+'/js/**/*.js',
		css:dest+'/css/*.css',
		png:dest+'/img/*.png',
		jpg:dest+'/img/*.jpg',
		dest:dest
	},
	concat:{
		libs:[
			src+'/js/libs/*',
			`!${src}/js/libs/_*`
		],
		dest:dest+'/assets/js/'
	}
};

module.exports = config;
