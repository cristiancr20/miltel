const mongoose = require('mongoose')

const footer = mongoose.Schema({
  opciones:{
    nombre:{
      type: String,
      required: true
    },
    url:{
      type: String,
      required: true
    }
  }
})

module.exports = mongoose.model('footer', footer)