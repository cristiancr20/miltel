const datos = require('../models/cobertura');

/* REGISTRAR COBERTURA */

/**
 * @api {post} /registrarCobertura Registrar una Cobertura
 * @apiName registrarCobertura
 * @apiGroup Cobertura
 *
 * @apiParam {String} Nombre del tipo de cobertura.
 * @apiParam {Array} Un arreglo de todos los lugares donde esta el tipo de cobertura. Ejm ["Amaluza", "Loja", "Macara"]
 * 
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.registrarCobertura = (req, res) => {

  /*
    Ejemplo en Postman de como se deberia registrar una cobertura
    tenemos el tipo y la imagen las cuales tienen información anidada.
    {
      "tipo":{
            "nombre":"Fibra Óptica Gpon",
          "lugar": ["Amaluza", "Loja"]
      }
    } 
  */


  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      /* console.log("Revisar Datos") */
      return res.status(500).json({
        error: error
      });
    } else {
      /* console.log("Registro de Cobertura exitoso") */
      return res.status(201).json({
        user: user
      });
    }
  })
}

/* EDITAR COBERTURA */

/**
 * @api {post} /editarCobertura Edicion de los datos de la Cobertura
 * @apiName editarCobertura
 * @apiGroup Cobertura
 *
 * @apiParam {ObjectId} id del dato que se desea modificar. Ejm. "_id": "63618bd7fb9c056f5f675007",
 * @apiParam {String} Nombre del tipo de cobertura.
 * @apiParam {Array} Un arreglo de todos los lugares donde esta el tipo de cobertura. Ejm ["Amaluza", "Loja", "Macara"]
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
    
    Llega a ser el mismo procedimiento que al momento de crear,
    con la única diferencia 
    que aquí se pide el _id del usuario.
    
  */
  const id = req.body._id;
  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      /* console.log("Error de edición ") */
      return res.status(500).json({
        error: error
      });
    } else {
      /* console.log("Campos editados") */
      return res.status(201).json({
        data: data
      });
    }
  })
}

/* LISTAR COBERTURA */

/**
 * @api {get} /listarCobertura Listar todos los datos de la Cobertura
 * @apiName listarCobertura
 * @apiGroup Cobertura
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
      return res.status(500).json({
        error: error
      });
    } else {
      /* console.log({ data: data }) */
      return res.status(201).json({
        data: data
      });
    }
  })
}


/* Eliminar cobertura */
/**
 * @api {post} /eliminarCobertura Elimina el dato de la Cobertura que se desee.
 * @apiName eliminarCobertura
 * @apiGroup Cobertura
 *
 * @apiParam {Number} id del dato. Ejm. "_id": "63618bd7fb9c056f5f675007"
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

exports.eliminarCobertura = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id, (req.body), (error, data) => {
    if (error) {
      /* console.log("Error de eliminación ") */
      return res.status(500).json({
        error: error
      });
    } else {
      /* console.log("Campos eliminado") */
      return res.status(201).json({
        data: data
      });
    }
  })
}

/* BUSCAR COBERTURA POR ID */
exports.buscarCobertura = async (req, res) => {
  try {
    const cobertura = await datos.findById(req.params.id);
    res.status(200).json(cobertura);
  } catch (err) {
    res.status(500).json(err);
  }
}