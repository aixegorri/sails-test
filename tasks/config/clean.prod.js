/**
 * Clean files and folders.
 *
 * ---------------------------------------------------------------
 *
 * This gulp task is configured to clean out the contents in the .tmp/public of your
 * sails project.
 *
 */
var del = require('del');
module.exports = function(gulp, plugins, growl) {
  gulp.task('clean:dev', function(cb) {
    return del('.tmp/public', cb);
  });
  gulp.task('clean:build', function(cb) {
    return del('www', cb);
  });
};
