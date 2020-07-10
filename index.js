const express = require('express');
const bodyParser = require('body-parser');

require('./database');
require('./config/env');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use('/impresora', require('./router/printer-router'));

app.listen(process.env.PORT, () => {
  console.log(`The server is running at: http://localhost:${process.env.PORT}`);
});
