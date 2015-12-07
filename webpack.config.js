'use strict'

const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    './src/js/app.js'
  ],
  output: {
    filename: 'public/js/bundle.js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new HtmlWebpackPlugin({ // Also generate a test.html
      filename: 'public/index.html',
      template: 'src/index.html',
      minify: {
        removeComments: true,
        conservativeCollapse: true,
        collapseWhitespace: true
      },
      minify: false
    })
  ],
  module: {
    loaders: [{
      test: /\.less$/,
      loader: 'style!css!less'
    }]
  }
}
