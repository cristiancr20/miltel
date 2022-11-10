const mongoose = require('mongoose')

const usuario = mongoose.Schema({
  nombre:{
    type: String,
    required: true
  },
  apellido:{
    type: String,
    required: true
  },
  correo:{
    type: String,
    trim: true,
    require: true,
    unique: true
  },
  contrasena :{
    type: String,
    required: true,
  },
  estado:{
    type: String,
    required: true
  }

})

module.exports = mongoose.model('usuario', usuario)