const datos = require('../models/formasPago');

/* REGISTRO DE FORMAS DE PAGO */
exports.registrarFormaPago = (req, res)=> {
  /*
  Ejemplo del registro de forma de pago en Postman.
  {
    "tipo":{
        "nombre": "Pagos en efectivo",
        "imagen":{
            "nombre": "Imagen pagos en efectivo",
            "dimension": "120",
            "url": "https://dplnews.com/wp-content/uploads/2019/04/dplnews_efectivo_jb190419.jpg"
        }
    }
  }
  */
  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Forma de pago exitoso")
    }
  })
}

/* EDICION FORMA DE PAGO */
exports.editarFormaPago = (req, res)=>{
  /* 

  Ejemplo de edicion de la forma de pagos en Postman
  aquí ya se pide el _id del dato a editar
  {
    "_id": "6362d8ea6bc747ce55d7ee42",

    "tipo":{
        "nombre": "Pagos con tarjeta",
        "imagen":{
            "nombre": "Imagen pagos con tarjeta",
            "dimension": "120",
            "url": "https://dplnews.com/wp-content/uploads/2019/04/dplnews_efectivo_jb190419.jpg"
        }
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

/* LISTAR FORMAS DE PAGO */

exports.listarFormaPago = (req, res)=>{
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

exports.eliminarFormasPago = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}
