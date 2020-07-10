const express = require('express');
const db = require('./database');

require('./config/env');

const app = express();

app.listen(process.env.PORT, () => {
  console.log(`The server is running at: http://localhost:${process.env.PORT}`);
});
