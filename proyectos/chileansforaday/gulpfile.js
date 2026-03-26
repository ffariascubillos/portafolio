var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('minify', function () {
    return gulp.src('src/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function () {
    gulp.watch('src/js/*.js', gulp.series('minify'));
});