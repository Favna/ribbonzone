/* eslint-disable multiline-comment-style, capitalized-comments, line-comment-position*/

const express = require('express'),
  path = require('path');

const app = express(); // eslint-disable-line one-var

app
  .set('view engine', 'html')
  .use(express.static(path.join(__dirname, '')))
  .use(express.static(`${__dirname}`));

app
  .all('/*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(5623, () => {
  console.log('Server started on http://localhost:5623');
});

// Local testing for mobile

// app.listen(5623, '192.168.2.4', () => {
//   console.log('Server started on http://192.168.2.4:5623');
// });