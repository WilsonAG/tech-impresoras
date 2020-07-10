const mongoose = require('mongoose');
require('./config/env');

mongoose.createConnection(
  process.env.MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;

    console.log('The database is on.');
  }
);

module.exports = mongoose.connection;
