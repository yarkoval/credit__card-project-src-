const gulp = require('gulp');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
// const cssnano = require('gulp-cssnano');
const cssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/css/some.css',
    './src/css/other.css'

]

const jsFiles = [
    './src/js/lib.js',
    './src/js/some.js'
]

function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS({
            level: 2
        }))
        .pipe(gulp.dest('./build/css'))
        .pipe(browserSync.stream());;
}

function scripts() {
    return gulp.src(jsFiles)
        .pipe(concat('all.js'))
        .pipe(uglify({
            toplevel: true
        }))
        .pipe(gulp.dest('./build/js'))
        .pipe(browserSync.stream());;
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        //online: true,
        //open: "tunnel",
        tunnel: false
    });

    // gulp.watch('./css/**/*.css', styles);
    // gulp.watch('./js/**/*.js', scripts);

    // gulp.watch('./*.html', browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./css/**/*.css").on('change', browserSync.reload);
    gulp.watch("./scss/*.scss").on('change', sass);
}

function clean() {
    return del(['build/*']);
}

// function sass() {
    //     return gulp.src('./scss/**/*.scss')
    //         .pipe(sass())
    //         .pipe(gulp.dest('./css'))
    // }

gulp.task('styles', styles);
gulp.task('scripts', scripts);
// gulp.task('sass', sass);
gulp.task('watch', watch);

gulp.task('sass', function() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'))
})

gulp.task('build', gulp.series(clean,
    gulp.parallel(styles, scripts)
));

gulp.task('dev', gulp.series('build', 'watch'));