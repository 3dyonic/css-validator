// Defining requirements
var gulp = require('gulp');
var gutil = require('gulp-util');
var validate = require('gulp-w3c-css');
var jsonFormat = require('gulp-json-format');
var cssbeautify = require('gulp-cssbeautify');
var rename = require("gulp-rename");

// Configuration file to keep your code DRY
var cfg = require('./gulpconfig.json');
var paths = cfg.paths;
var output =cfg.output;

// W3C Validator
gulp.task('default', function () {
    gulp.src(paths.project + paths.theme + paths.css)
        .pipe(cssbeautify())
        .pipe(validate({warning:'no'}))
        .pipe(jsonFormat(4))
        .pipe(rename(output.report))
        .pipe(gulp.dest(paths.dist));
})