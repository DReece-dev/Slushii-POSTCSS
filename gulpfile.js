const postcss = require('gulp-postcss');
const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
const purgecss = require('gulp-purgecss');
const cssnano = require('cssnano');

gulp.task('css', () => {
    let plugins = [
        autoprefixer
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});

gulp.task('purgecss', () => {

    return gulp.src('./src/*.css')
        .pipe(purgecss({
            content: ['./*.html']
        }))
        .pipe(gulp.dest('./dest'))
})

gulp.task('mini', () => {
    let nano = [
        cssnano
    ];
    return gulp.src('./dest/*.css')
        .pipe(postcss(nano))
        .pipe(gulp.dest('./dest'));
});