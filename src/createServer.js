'use strict';

const express = require('express');
const cors = require('cors');
const { router: phonesRouter } = require('./routes/phones');

const createServer = () => {
  const app = express();

  app.use(cors());

  app.get('/', (req, res) => {
    res.send(`
      <h1>Hello there from Five Lab &#128526;</h1>
      <p>Check endpoint
        <a href="https://product-catalog-api-sc0v.onrender.com/phones">
          /phones
        </a>
      </p>
      `);
  });
  app.use('/phones', phonesRouter);

  return app;
};

module.exports = {
  createServer,
};
