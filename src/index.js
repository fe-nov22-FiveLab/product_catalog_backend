'use strict';

const { createServer } = require('./createServer');

const port = 5000;

createServer().listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
