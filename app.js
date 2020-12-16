const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Nice work, Makai!');
});

app.get('/lebowski', (req, res) => {
  res.set('X-lebowski', 'dudeisms');
  res.status(418);
  res.send("Hey man, there's a beverage here!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
