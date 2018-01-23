const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;

const urlencodedParser = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();

app.use('/', (req, res, next) => {
  console.log(`Request Url: ${req.url}`);
  next();
});

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/person/:id', (req, res) => {
  res.render('person', { ID: req.params.id, name: req.query.name });
});

app.post('/person', urlencodedParser, (req, res) => {
  console.log(req.body.firstName, req.body.lastName);
  res.send('Thank you!');
});

app.post('/personjson', jsonParser, (req, res) => {
  console.log(req.body.firstName, req.body.lastName);
  res.send('Thank you for the JSON data!');
});

app.get('/api', (req, res) => {
  res.json({ firstname: 'John', lastName: 'Doe' });
});

app.listen(port);
