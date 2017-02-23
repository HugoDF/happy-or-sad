const path = require('path');
const webpack = require('webpack');
const express = require('express');
const config = require('./webpack.config');

const app = express();
const compiler = webpack(config);

const api = require('./src/api/api');

api.listen(3001, (err) => {
  if (err) {
    return console.error(err);
  }
  console.log('API listening at http://localhost:3001/');
});

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log('App served at http://localhost:3000/');
});
