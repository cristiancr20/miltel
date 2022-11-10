const mongoose = require('mongoose')

const quienesSomos = mongoose.Schema({

  opcionesQuienesSomos:{
    nombreQuienesSomos:{
      type: String,
      required: true
    },
    conceptoQuienesSomos:{
      type: String,
      required: true
    }
  }
})

module.exports = mongoose.model('quienesSomos', quienesSomos)