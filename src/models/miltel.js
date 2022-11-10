const mongoose = require('mongoose')

const miltel = mongoose.Schema({
  imagenMiltel: {
    url: {
      type: String,
      required: true
    },
    dimension: {
      type: String,
      required: true
    }
  },
  video: {
    type: String,
    required: true
  },
  numeroContacto: {
    type: String,
    required: true,
    default: 0
  },
  correo: {
    type: String,
    required: true,
  },
  mensajeInicio: {
    type: String,
    required: true
  },
  redSocial: {
    nombreRedSocial: {
      type: String,
      required: true
    },
    icono: {
      type: String,
      required: true
    },
    urlRedSocial: {
      type: String,
      required: true
    }
  },

  imagenFormaPago: {
    nombreFormaPago: {
      type: String,
      required: true
    },
    dimension: {
      type: String,
      required: true
    },
    urlFormaPago: {
      type: String,
      required: true
    }
  },
  imagenCobertura:{
    nombreImagen:{
      type: String,
      required: true,
    },
    dimension:{
      type: String,
      required: true
    },
    url:{
      type: String,
      required: true
    }
  },
  objetivoQuienesSomos:{
    type: String,
    required: true
  }
})

module.exports = mongoose.model('miltel', miltel)