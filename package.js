const _ = require('lodash')
// config = {buildsystem, styles, features}
module.exports = function (pkg, config) {
  const buildsystem = config.buildsystem
  const styles = config.styles
  const features = config.styles

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

  const npmBuild = {
    browserify: '12.0.1',
    watchify: '3.6.1',
    babelify: '7.2.0'
  }

  _.set(pkg, 'dependencies', _.assign(
    {},
    pkg.dependencies,
    features.bootstrap && {bootstrap: '3.3.6'}
  ))

  _.set(pkg, 'devDependencies', _.assign(
    {},
    pkg.devDependencies,
    buildsystem.npm && {
      rimraf: '2.4.4',
      mkdirp: '0.5.1',
      'npm-run-all': '1.3.3'
    },
    styles.sass && {'node-sass': '3.4.2'},
    buildsystem.gulp ? gulp : npmBuild,
    buildsystem.gulp && styles.sass && {
      'gulp-plumber': '^1.0.1',
      'gulp-sass': '^2.0.0'
    },
    buildsystem.npm && styles.sass && {
      sassify: '0.9.1'
    }
  ))

  if (buildsystem.npm && styles.sass) _.set(pkg, 'browserify.transform', ['sassify'])

  _.set(pkg, 'scripts', _.assign(
    {},
    pkg.scripts,
    {build: 'npm-run-all build:*'},
    buildsystem.gulp ? {
      'build:gulp': 'gulp build',
      start: 'gulp watch'
    } : {
      start: 'watchify index.js -o dist/bundle.js',
      prebuild: 'rimraf ./dist && mkdir dist',
      prestart: 'npm run prebuild',
      'build:js': 'browserify -t [babelify --presets [es2015]] -i index.js > dist/bundle.js'
    }
  ))

  return pkg
}
