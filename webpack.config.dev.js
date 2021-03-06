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
  // devtool: 'cheap-module-eval-source-map',
  devtool: 'eval',
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.ts', '.js', '.tsx', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, 
        loaders: ['react-hot', 'babel-loader', 'ts-loader',],
        exclude: /(node_modules|bower_components)/,
      }
    ]
  }
}
