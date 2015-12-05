module.exports = function (pkg, {buildsystem, styles, features}) {
  const gulp = {
    'gulp': '^3.9.0',
    'gulp-autoprefixer': '^3.0.1',
    'gulp-cache': '^0.2.8',
    'gulp-eslint': '^0.13.2',
    'gulp-if': '^1.2.5',
    'gulp-imagemin': '^2.2.1',
    'gulp-load-plugins': '^0.10.0',
    'gulp-minify-css': '^1.2.1',
    'gulp-minify-html': '^1.0.0',
    'gulp-size': '^1.2.1',
    'gulp-sourcemaps': '^1.5.0',
    'gulp-uglify': '^1.1.0',
    'gulp-useref': '^3.0.0'
  }

  Object.assign(
    pkg.dependencies,
    styles.bootstrap && {booostrap: '3.3.6'}
  )

  Object.assign(
    pkg.devDependencies,
    {
      rimraf: '2.4.4',
      mkdirp: '0.5.1',
      'npm-run-all': '1.3.3'
    },
    styles.sass && {'node-sass': '3.4.2'},
    buildsystem.gulp && gulp,
    buildsystem.gulp && styles.sass && {
      'gulp-plumber': '^1.0.1',
      'gulp-sass': '^2.0.0'
    }
  )
  pkg.scripts.build = 'npm-run-all build:*'

  return pkg
}
