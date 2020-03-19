var gulp = require('gulp');
var requireDir = require('require-dir');
var path = require('path');
var chalk = require("chalk");
require("date-utils");
var date = new Date();
requireDir('./gulp/tasks', { recurse: true });
var runSequence = require('run-sequence');

(function (config) {
    console.log("\n\n");
    console.log(chalk.white("/////////////////////////////////////////////////"));
    console.log(chalk.bold("(o_o) Gulp..."));
    console.log(chalk.white("................................................."));
    console.log("project\t"+chalk.white(": ")+config.project);
    console.log("path\t"+chalk.white(": ")+__dirname);
    console.log("start\t"+chalk.white(": ")+date.toFormat("YYYY/MMDD HH24:MI:SS"));
    console.log(chalk.white("/////////////////////////////////////////////////\n"));
})(require('./gulp/config'));

gulp.task('default', e=>{
  runSequence('copy',['watch','ejs','sass','concat'],'browser-sync',e);
});

gulp.task('release',e=>{
  runSequence(['babel','sass-min','concat'],'diff', e);
})
