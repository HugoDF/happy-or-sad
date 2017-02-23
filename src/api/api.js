const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const rateMood = require('./rateMood');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Method', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(bodyParser.json());

app.post('/rateMood', (req, res) => {
  const { text } = req.body;
  const mood = rateMood(text);
  res.json({
    mood
  });
});

module.exports = app;
