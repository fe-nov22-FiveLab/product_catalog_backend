'use strict';

const express = require('express');
const phonesController = require('../controllers/phones');

const router = express.Router();

router.get('/', phonesController.getAll);

module.exports = {
  router,
};

