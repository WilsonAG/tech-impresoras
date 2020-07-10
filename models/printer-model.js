const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const printerSchema = new Schema({
  marca: {
    type: String,
    required: [true, 'La marca es necesaria'],
  },
  modelo: {
    type: String,
    required: [true, 'El modelo es encesario.'],
  },
  serie: {
    type: Number,
    required: [true, 'El numero de serie es necesario'],
  },
  color: {
    type: boolean,
    default: false,
  },
  ip: {
    type: String,
    required: [true, 'La ip es necesaria.'],
  },
  contador: {
    type: Number,
    default: 0,
  },
  precio: {
    type: Number,
    required: [true, 'El precio es necesario'],
  },
});

module.exports = mongoose.model('Printer', printerSchema);
