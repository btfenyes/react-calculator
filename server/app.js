const fs = require('fs');
const express = require('express');

const app = express();

app.post('/number/:number', (req, res) => {
  fs.writeFile('number.txt', req.params.number, (err) => {
    if (err) {
      res.status(400).send(err);
      return;
    }

    res.send('Success!');
  });
});

app.get('/number', (req, res) => {
  fs.readFile('number.txt', 'utf-8', (err, data) => {
    if (err) {
      res.status(400).send(err.message);
      return;
    }

    res.send(data);
  });
});

const port = 5000;
app.listen(port);