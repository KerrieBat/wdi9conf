const gulp = require('gulp');
const connect = require('gulp-connect');
const cleanCSS = require("gulp-clean-css");
const csscomb = require('gulp-csscomb');
const csslint = require('gulp-csslint');
const jshint = require('gulp-jshint');
const sass = require('gulp-sass');
const maps = require("gulp-sourcemaps");
const rename = require('gulp-rename');
const streamify = require('gulp-streamify');
const uglify = require('gulp-uglify');

//CSS tasks

gulp.task("lintCSS", function() {
   return gulp.src('client/stylesheets/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});

gulp.task('sass', function () {
  return gulp.src('client/stylesheets/*.scss')
    .pipe(maps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(maps.write("./"))
    .pipe(gulp.dest('public/stylesheets'));
});

gulp.task("minifyCSS", function(){
  return gulp.src('client/stylesheets/*.css')
    .pipe(maps.init())
    .pipe(csscomb())
    .pipe(cleanCSS())
    .pipe(maps.write("./"))
    .pipe(gulp.dest('public/stylesheets'));
});

//JavaScript tasks

gulp.task('lintJS', function() {
  return gulp.src('client/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task("minifyJS", function(){
  return gulp.src("client/scripts/*.js")
    .pipe(maps.init())
    .pipe(uglify())
    .pipe(maps.write("./"))
    .pipe(gulp.dest("public/scripts"));
});

//Common tasks

gulp.task("build", ["minifyJS", "minifyCSS"]);

gulp.task('watch', function(){
  gulp.watch("client/scripts/*.js", ['lintJS']);
  gulp.watch("client/stylesheets/*.css", ["lintCSS"]);
  gulp.watch("client/stylesheets/*.scss", ["sass"]);
});

gulp.task('server', function(){
  connect.server();
});

gulp.task('default', ['watch', 'server']);
