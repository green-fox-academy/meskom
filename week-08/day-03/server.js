'use strict';

const express = require('express');
const PORT = 3000;
const app = express();
//const path = request('path')

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
//path.join(__dirname, form.html)
app.get('/', (req, res) => {
  res.sendFile('form.html');
});

app.get('/', (req, res) => {
  res.send('hi');
});
// app.post('/send', (req, res) => {
//   console.log(req.body);
//   res.json(req.body);
// });

app.listen(PORT, () => {
  console.log(`the server is running on port ${PORT}`);
});
