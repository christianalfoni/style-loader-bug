var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('./../webpack.config.js');
var path = require('path');

var buildPath = path.resolve(__dirname, '..', 'build');

module.exports = function () {

  var compiler = webpack(webpackConfig, function () {
    console.log('Project is ready!');
  });

  var bundler = new WebpackDevServer(compiler, {
    contentBase: buildPath,
    hot: true,
    quiet: false,
    noInfo: true,
    publicPath: '/build/',
    stats: {
      colors: true
    },
    historyApiFallback: true
  });

  bundler.listen(3030, "localhost", function () {
    console.log('Bundling project, please wait...');
  });

};
