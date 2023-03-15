'use strict';

const express = require('express');
const cors = require('cors');

const createServer = () => {
  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Works');
  });

  return app;
};

module.exports = {
  createServer,
};
