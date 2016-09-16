var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
//var browserSync = require('browser-sync');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');
var autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'Firefox ESR', "ie 8", "ie 7"]
};
var jade = require('gulp-jade');
var gutil = require('gulp-util');
var prettify = require('gulp-prettify');

gulp.task('sass', function() {
    return sass('scss/**/*.scss', { noCache: true })
        .on('error', sass.logError)
        .pipe(minifycss())
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(gulp.dest('css')).on('error', sass.logError);

});

gulp.task('jade', function() {
    var YOUR_LOCALS = {};
    var j = jade({});
    j.on('error', function(e) {
        gutil.log(e);
        j.end();
    });

    return gulp.src('./views/*.jade')
        .pipe(j)
        .pipe(prettify({
            indent_size: 2
        }))
        /*
        .pipe(jade({
            locals: YOUR_LOCALS,
            pretty: true
        }))
        */
        .pipe(gulp.dest('./'))
});
/*
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./",
        }
    });
});
*/


gulp.task('default', ['sass', 'jade'], function() {
    gulp.watch("scss/**/*.scss", ['sass']);
    gulp.watch("views/**/*.jade", ['jade']);
    //gulp.watch(['**/*.html'], browserSync.reload);
    //gulp.watch(['**/*.php'], browserSync.reload);
    //gulp.watch(['css/**/*.css'], browserSync.reload);
});

/*
gulp.task('default', ['sass'], function() {
   
});

gulp.task('watch', function() {
    
})
*/
