var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
var w = 'www/'

gulp.task('sass', function() {
    const includePaths = ['./node_modules/nebula-css/', './www/assets/styles/scss/'];
   
    return gulp.src(w + 'assets/styles/scss/*.scss')
        .pipe(sass({includePaths}).on('error', sass.logError)) 
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(w + 'assets/styles/'));
});


gulp.task('watch', function() {
    gulp.watch(w + 'assets/styles/scss/*.scss', gulp.series('sass'));
    gulp.watch(w + 'assets/styles/scss/*/*.scss', gulp.series('sass'));
    gulp.watch(w + 'assets/js/*.js',gulp.series('js'));
    
});

gulp.task('js', function() {
    gulp.src([
            'node_modules/jquery/dist/jquery.js',           
            w+'assets/js/*.js'
        ])       
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(w+'assets/js/src'));
});

gulp.task('default',gulp.parallel('watch'));

