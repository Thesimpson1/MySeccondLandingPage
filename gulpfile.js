const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
function style(){
    return gulp.src('./**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
    
}
function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./**/*.scss', style);
   

}
exports.watch = watch;
exports.style = style;