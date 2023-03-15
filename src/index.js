'use strict';

const { createServer } = require('./createServer');

const port = process.env.PORT || 5000;

createServer().listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
