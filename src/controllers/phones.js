'use strict';

const phonesServices = require('../services/phones');

const getAll = (req, res) => {
  const phones = phonesServices.getAll();

  res.send(phones);
};

module.exports = {
  getAll,
};
