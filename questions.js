module.exports = [{
  name: 'buildsystem',
  question: 'What is your preffered build system?',
  type: 'list',
  choices: ['npm', 'gulp']
}, {
  name: 'styles',
  question: 'What is your preferred stylesheet language?',
  type: 'list',
  choices: ['sass', 'css']
}, {
  name: 'features',
  question: 'Would you like to include any of these libraries?',
  type: 'checkbox',
  choices: ['Bootstrap', 'Modernizr', 'jQuery'],
  default: ['Bootstrap', 'Modernizr', 'jQuery']
}]
