const datos = require('../models/planes');

/* REGISTRO DE PLANES */
exports.registrarPlanes = (req, res) => {
  /*  
  {
    "tipo":"Fibra Optica V2",
    "cobertura": "20 Mbps",
    "nombre":"BDH",
    "costo": "16"
  } 
  */
  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Planes exitoso")
    }
  })
}

/* EDITAR  PLANES*/
exports.editarPlanes = (req, res) => {
  /* 
  Ejemplo de editar los planes en Postman
  {
    "_id":"6362e4d002139d0cad99e502",
    "tipo":"Fibra Optica V2",
    "cobertura": "20 Mbps",
    "nombre":"BDH",
    "costo": "16"
  }  */

  const id = req.body._id;

  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      console.log("Error de edición ")
    } else {
      console.log("Campos editados")
    }
  })
}

/* LISTAR PLANES */

exports.listarPlanes = (req, res) => {
  datos.find().exec((error, data) => {
    if (error) {
      console.log("Error al mostrar los datos")
    } else {
      console.log({ data: data })
      return res.status(200).json({
        data:data
      });
    }
  })
}

exports.eliminarPlanes = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}