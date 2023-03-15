'use strict';

const express = require('express');
const cors = require('cors');
const { router: phonesRouter } = require('./routes/phones');

const createServer = () => {
  const app = express();

  app.use(cors());

  app.use('/phones', phonesRouter);

  return app;
};

module.exports = {
  createServer,
};
