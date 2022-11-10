const datos = require('../models/cobertura');

/* REGISTRAR COBERTURA */
exports.registrarCobertura = (req, res) => {

  /*
    Ejemplo en Postman de como se deberia registrar una cobertura
    tenemos el tipo y la imagen las cuales tienen información anidada.
    {
      "tipo":{
            "nombre":"Fibra Óptica Gpon",
          "lugar": ["Amaluza", "Loja"]
      },
      "imagen":{
          "nombreImagen":"Mapa", 
          "dimension": "250",
          "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
      }
    } 
  */

  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Cobertura exitoso")
    }
  })
}

/* EDITAR COBERTURA */

exports.editarCobertura = (req, res) => {

  /* 
    Ejemplo de Postman para la edicion de la informacion del usuario, 
    Primeramente se pide el _id del usuario para poder realizar la busqueda,
    {
      "_id": "63618bd7fb9c056f5f675007",
      "tipo":{
          "nombre":"Radio Enlace",
          "lugar": ["Amaluza", "Loja", "Macara"]
      }
    }
    
    Llega a ser el mismo procedimiento que al momento de crear, con la única diferencia 
    que aquí se pide el _id del usuario.
    
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

/* LISTAR COBERTURA */
exports.listarCobertura = (req, res) => {

  /* 
  Ejemplo de la forma en la que se lista en Postman

  {
            "tipo": {
                "nombre": "Radio Enlace",
                "lugar": [
                    "Amaluza",
                    "Loja",
                    "Macara"
                ]
            }
            "_id": "63618bd7fb9c056f5f675007",
            "__v": 0
        } */
  datos.find().exec((error, data) => {
    if (error) {
      console.log("Error al mostrar los datos")
    } else {
      console.log({ data: data })
      /* return res.status(200).json({
        data:data
      }); */
    }
  })
}

exports.eliminarCobertura = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}