var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'build');
var appPath = path.resolve(__dirname, 'app');

var config = {
  entry: [
    'webpack-dev-server/client?http://localhost:3030',
    path.resolve(appPath, 'main.js')
  ],
  context: appPath,
  devtool: 'eval',
  output: {
    filename: 'main.js',
    path: buildPath,
    publichPath: '/build/'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  }
};

module.exports = config;
