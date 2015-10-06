module.exports = {
  styles: {
    prompt: "What's your style?",
    input: {
      type: String,
      enum: ['css', 'sass']
    }
  },
  features: {
    prompt: 'What more would you like?',
    input: {
      type: [String],
      enum: ['Bootstrap', 'Modernizr', 'jQuery']
    }
  }
}
