/**
 * Compiles SASS files into CSS.
 *
 * ---------------------------------------------------------------
 *
 * Only the `assets/styles/index.scss` is compiled.
 * This allows you to control the ordering yourself, i.e. import your
 * dependencies, mixins, variables, resets, etc. before other stylesheets)
 *
 * Info: sass:prod isn't live-reloading the server
 *
 */
module.exports = function(gulp, plugins, growl) {

  gulp.task('sass:dev', function() {
    return gulp.src('assets/styles/index.scss')
      .pipe(plugins.sourcemaps.init())
      .pipe(plugins.sass({
        outputStyle: 'extended'
      }))
      .pipe(plugins.combineMq({
        beautify: true
      }))
      .pipe(plugins.autoprefixer('last 2 version', 'ie >= 10'))
      .pipe(plugins.sourcemaps.write())
      .pipe(gulp.dest('.tmp/public/styles/'))
      .pipe(plugins.livereload())
      .pipe(plugins.if(growl, plugins.notify({ message: 'sass dev task complete' })));
  });

  gulp.task('sass:prod', function() {
    return gulp.src('assets/styles/index.scss')
      .pipe(plugins.rename({
        basename: 'production',
        suffix: '.min'
      }))
      .pipe(
        plugins.sass({
          outputStyle: 'compressed',
          ext: '.css'
        })
      )
      .pipe(combineMq({
        beautify: false
      }))
      .pipe(plugins.autoprefixer('last 2 version', 'ie >= 10'))
      .pipe(gulp.dest('.tmp/public/concat/'));
  });
};
