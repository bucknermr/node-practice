const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use('/', (req, res, next) => {
  console.log(`Request Url: ${req.url}`);
  next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('<html> <head><link href="assets/style.css" type="text/css" rel="stylesheet" /></head> <body><h1>Hello World!</h1></body> </html>');
});

app.get('/person/:id', (req, res) => {
  res.send(`<html><body><h1>Person: ${req.params.id}</h1></body></html>`);
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastName: 'Doe' });
});

app.listen(port);
