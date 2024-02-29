const gulp = require('gulp');

gulp.task('copy-config', function() {
    return gulp.src('src/config/**/*')
        .pipe(gulp.dest('dist/config'));
});
