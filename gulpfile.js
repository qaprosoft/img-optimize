'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  gulp: require('gulp'),
  del: require('del'),
  gp: require('gulp-load-plugins')(),
  imageminMozjpeg: require('imagemin-mozjpeg'),
  path: require('path'),
  pathPlugins: {
    tasks: require('./gulp/paths.js')
  }
};

$.pathPlugins.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('optimize', $.gulp.series('clean','copy:images'));

$.gulp.task('default', $.gulp.series('optimize'));
