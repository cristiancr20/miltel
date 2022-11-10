const mongoose = require('mongoose')

const cobertura = mongoose.Schema({
  tipo:{
    nombre:{
      type: String,
      required: true
    },
    lugar:{
      type: Array,
      default:[]
    }
  },
})

module.exports = mongoose.model('cobertura', cobertura)