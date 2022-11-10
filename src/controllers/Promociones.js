const { request } = require('express')
const datos = require ('../models/promociones')

/* REGISTRAR PROMOCIONES */
exports.registrarPromociones = (req, res) =>{

  /* 
  Ejemplo de registro de planes eb POSTMAN
  {
    "tipo":{
        "nombre": "Super",
        "velocidad": "40 MBPS",
        "descripcion": "Disney+"
    }
  } 
  */
  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Promociones exitoso")
    }
  })
}

/* EDITAR PROMOCIONES */
exports.editarPromociones = (req, res)=>{
  /* 
  Ejemplo de la edicion en Postman
  {
    "_id":"6369414484031672160411cf",
    "tipo":{
        "nombre": "Mega",
        "velocidad": "50 MBPS",
        "descripcion": "Disney+, Netflix"
    }
  } 
  */
  const id = req.body._id;
  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      console.log("Error de edición ")
    } else {
      console.log("Campos editados")
    }
  })
}

/* LISTAR PROMOCIONES */

exports.listarPromociones = (req, res) => {

  /* 
  Ejemplo de listado de promociones en Postman
  {
    "data": [
        {
            "tipo": {
                "nombre": "Mega",
                "velocidad": "50 MBPS",
                "descripcion": "Disney+, Netflix"
            },
            "_id": "6369414484031672160411cf",
            "__v": 0
        }
    ]
}
  */
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

exports.eliminarPromociones = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}