const path = require('path')

module.exports = {
  entry: {
    main: ['@babel/polyfill', './src/js/app.js']
  },
  output: {
    path: path.resolve(__dirname, 'book-panel/js'),
    filename: 'book-panel.min.js' // name = entry.main output main.bundle.js
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
