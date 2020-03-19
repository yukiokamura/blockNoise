var gulp = require('gulp');
var browserSync =require('browser-sync');

gulp.task('browser-sync', function() {
    browserSync({
        server: {
             baseDir: "./dist/"       //対象ディレクトリ
            ,index  : "index.html"      //インデックスファイル
        },
        notify: false
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});
