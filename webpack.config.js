var path = require('path');
var webpack = require('webpack');  

module.exports = {
  entry: [
    'webpack-hot-middleware/client',
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  // entry: './app.ts',
  // output: {
  //   path: 'build',
  //   filename: 'bundle.js'
  // },
  // devtool: 'source-map',
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js']
  },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  module: {
    loaders: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' }
    ]
  }
}
