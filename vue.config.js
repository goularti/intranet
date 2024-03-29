const { defineConfig } = require('@vue/cli-service');
const gulp = require('gulp');

module.exports = defineConfig({
    publicPath: '/intranet'
});
gulp.task('copy-config', function() {
    return gulp.src('src/config/**/*')
        .pipe(gulp.dest('dist/config'));
});
