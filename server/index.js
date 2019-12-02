/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');

const port = 3000;
const Controllers = require('./controllers.js');

app.use('/', express.static(path.join(__dirname, '../client/dist')));

app.get('/', (req, res) => {
  res.send('hello from server');
});

app.get('/api/listing/:id', (req, res) => {
  Controllers.getListing(req.params, res);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
