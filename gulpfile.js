'use strict';

var gulp = require('gulp');
var open = require('open');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
    return gulp.src(['angular-hodor.js'])
        .pipe($.jshint('.jshintrc'))
        .pipe($.jshint.reporter('default'))
        .pipe($.size());
});

gulp.task('connect', function () {
    $.connect.server({
        root: [dist],
        port: 9000,
        livereload: true
    });
});