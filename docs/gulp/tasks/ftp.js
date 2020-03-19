var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('sftp', function () {
    return gulp.src('dist/*')
        .pipe(sftp({
            host: 'works2.ranaextractive.jp',
            user: 'works',
            key:{
              location:'~/.ssh/rex_tech',
              passphrase:'roppongi2101'
            },
            remotePath:"/var/www/html.dev2.franckmuller-sub/htdocs"
        }));
});
