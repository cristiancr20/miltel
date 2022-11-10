const mongoose = require('mongoose')

const formasPago = mongoose.Schema({
  tipo:{
    nombre:{
      type: String,
      required: true, 
    },
    imagen:{
      nombre:{
        type: String,
        required: true
      },
      dimension:{
        type: String,
        required: true
      },
      url:{
        type: String,
        required: true
      }
    }
  },
})

module.exports = mongoose.model('formasPago', formasPago)