const mongoose = require('mongoose')

const planes = mongoose.Schema({
  tipo: {
    type: String,
    required: true,
  },
  cobertura: {
    type: String,
    required: true
  },
  nombre: {
    type: String,
    required: true
  },
  costo: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('planes', planes)