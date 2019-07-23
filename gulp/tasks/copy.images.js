'use strict';

module.exports = () => {
  $.gulp.task('copy:images', () => {
    return $.gulp.src($.config.assets.img, { since: $.gulp.lastRun('copy:images') })
      .pipe($.gp.plumber())
      .pipe($.gp.imagemin([
        $.imageminMozjpeg({
          progressive: true,
          quality: 85
        }),
        $.gp.imagemin.gifsicle({ interlaced: true }),
        $.gp.imagemin.optipng({ optimizationLevel: 5 }),
        $.gp.imagemin.svgo({
          plugins: [
            { removeViewBox: false },
            { cleanupIDs: false }
          ]
        })
      ], {
        verbose: true
      }))
      .pipe($.gulp.dest($.config.dist));
  });
};
