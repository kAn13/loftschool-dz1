'use strict';

var gulp = require("gulp");
var wiredep = require('wiredep').stream;
var browserSync = require('browser-sync');
var concatCss = require('gulp-concat-css');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");
var notify = require("gulp-notify");
var autoprefixer = require('gulp-autoprefixer');


var rimraf = require('gulp-rimraf'),
    useref = require('gulp-useref'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if');
    //imagemin = require('gulp-imagemin');



gulp.task('server', function() {
  browserSync({
    port: 9000,
    server: {
      baseDir: 'app/'
    }
  });
});

// gulp.task('default', function () {
//   return gulp.src('app/css/**/*.css')
//     .pipe(concatCss("bundle.css"))
//     .pipe(minifyCss())
//     .pipe(rename("bundle.min.css"))
//     .pipe(autoprefixer({
//       browsers: ['last 2 versions', '> 1%', 'ie 9'],
//       cascade: false
//     }))
//     .pipe(gulp.dest('app/css'))
//     .pipe(notify('Complete'));
// });



gulp.task('watch', function() {
  gulp.watch([
    'app/*.html',
    'app/js/**/*.js',
    'app/css/**/*.css'
  ]).on('change', browserSync.reload);
  gulp.watch('bower.json', ['wiredep']);
});

gulp.task('default', ['server', 'watch']);

// gulp.task('watch', function() {
//   gulp.watch('app/css/**/*.css', ['default'])
// });



gulp.task('wiredep', function() {
  gulp.src('app/*.html')
      .pipe(wiredep())
      .pipe(gulp.dest('app'))
});


gulp.task('useref', function() {
  return gulp.src('app/*.html')
      .pipe(useref())s
      .pipe(gulpif('*.js', uglify()))
      .pipe(gulpif('*.css', minifyCss({compatibility: 'ie8'})))
      .pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
  return gulp.src('dist', {read: false})
  .pipe(rimraf());
});
