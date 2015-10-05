var helper = require('gentry-helper')

/*
helper.addUp('firstFile', 'secondFile') // adds seconfile to firstfile
helper.exchange('firstFile.css', 'secondFile') // replaces firstfile w/ seconfile, parses file extension from first arg
*/

/*
features = []
features = ['bootstrap']
features = ['bootstrap', 'modernizer']
features = ['bootstrap', 'modernizer', jquery]
...

styles = 'css'
styles = 'styl'
...

*/

module.exports = function ({features, styles}, done) {

  if (features.indexOf('boostrap') > -1) {
    helper.exchange(('style.' + styles), 'boostrap/style.')
    helper.addUp('package.json', styles)
  }

}
