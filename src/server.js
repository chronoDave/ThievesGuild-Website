const express = require('express');
const path = require('path');

express()
  .use(express.static(path.resolve(__dirname, '../dist')))
  .use('/', (req, res) => res.sendFile('index.html', { root: path.resolve(__dirname, '../dist') }))
  .listen(process.env.PORT || '7777', '0.0.0.0', () => console.log('Up and running'));
