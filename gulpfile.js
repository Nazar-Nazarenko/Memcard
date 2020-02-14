const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const del = require('del');
const browserSync = require('browser-sync').create();
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');

sass.compiler = require('node-sass');

const jsFiles = [
    './src/js/app.js',
];


function styles() {
    return gulp.src('./src/css/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(
            autoprefixer({
                cascade: false
            })
        )
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        //.pipe(browserify())
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        // tunnel: true
    });
    gulp.watch('./src/css/**/*.scss', styles);
    gulp.watch('./src/js/**/*.js', scripts);
    gulp.watch('./*.html', browserSync.reload);


}

function clean() {
    return del(['./build/*']);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean,
    gulp.parallel(styles, scripts)
));
gulp.task('dev', gulp.series('build', watch));
