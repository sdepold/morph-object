'use strict';

var gulp   = require('gulp');
var jshint = require('gulp-jshint');
var mocha  = require('gulp-mocha');
var path   = require('path');

gulp.task('default', ['lint', 'test'], function () {});

gulp.task('lint', function () {
  gulp
    .src([
      path.resolve(__dirname, 'gulpfile.js'),
      path.resolve(__dirname, 'index.js'),
      path.resolve(__dirname, 'test', '**', '*.js')
    ])
    .pipe(jshint())
    .pipe(jshint.reporter(require('jshint-stylish')))
    .pipe(jshint.reporter('fail'));
});

gulp.task('test', function () {
  gulp
    .src(path.resolve(__dirname, 'test', '**', '*.test.js'), { read: false })
    .pipe(mocha({
       reporter:    'spec',
       ignoreLeaks: true,
       timeout:     1000
    }));
});
