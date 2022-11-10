const mongoose = require('mongoose')

const promociones = mongoose.Schema({
  tipo:{
    nombre:{
      type: String,
      required: true
    },
    velocidad:{
      type: String,
      required: true
    },
    descripcion:{
      type: String,
      required: true
    }
  }
})

module.exports = mongoose.model('promociones', promociones)