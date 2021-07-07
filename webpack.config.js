const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config.base')
module.exports = {
  ...base,
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
