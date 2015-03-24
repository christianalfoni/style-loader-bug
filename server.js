var express = require('express');
var httpProxy = require('http-proxy');
var path = require('path');
var app = express();
var bundle = require('./server/bundle.js');

var publicPath = path.resolve(__dirname, 'public');
var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
bundle();


app.use(express.static(publicPath));

app.all('*', function (req, res) {
  proxy.web(req, res, {
    target: 'http://localhost:3030/'
  });
});

app.listen(3000, function () {
  console.log('Listening to app on port 3000');
});
