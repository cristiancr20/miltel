const datos = require('../models/quienesSomos');

/* REGISTRAR QUIENES SOMOS */

/**
 * @api {post} /registrarQuienesSomos Registrar los datos personales de la empresa "Mision, Vision".
 * @apiName registrarQuienesSomos
 * @apiGroup quienesSomos
 *
 * @apiParam {String} Nombre de opcion quienes somos. Ejm. "nombreQuienesSomos": "Misión", 
 * @apiParam {String} Conceptop de la opcion quienes somos. Ejm. "conceptoQuienesSomos": "Ser una empresa con constante actualización tecnológica, encargándose de dar soluciones eficientes frente a las problemáticas comunicacionales, inspirando confianza en hogares y empresas para ser parte de nuestro grupo familiar MilTel"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

exports.registrarQuienesSomos = (req, res) => {
  /* 
  {
    "opcionesQuienesSomos": {
        "nombreQuienesSomos": "Misión",
        "conceptoQuienesSomos": "Ser una empresa con constante actualización tecnológica, encargándose de dar soluciones eficientes frente a las problemáticas comunicacionales, inspirando confianza en hogares y empresas para ser parte de nuestro grupo familiar MilTel"
    }
}
  */
  const nuevoRegistro = new datos(req.body)
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Quienes Somos exitoso")
    }
  })
}

/* EDITAR QUIENES SOMOS */
/**
 * @api {post} /editarQuienesSomos Editar los datos personales de la empresa "Mision, Vision".
 * @apiName editarQuienesSomos
 * @apiGroup quienesSomos
 *
 * @apiParam {Number} id de los datos de quienes Somos. Ejm. "_id": "63618bd7fb9c056f5f675007"
 * @apiParam {String} Nombre de opcion quienes somos. Ejm. "nombreQuienesSomos": "Misión", 
 * @apiParam {String} Conceptop de la opcion quienes somos. Ejm. "conceptoQuienesSomos": "Ser una empresa con constante actualización tecnológica, encargándose de dar soluciones eficientes frente a las problemáticas comunicacionales, inspirando confianza en hogares y empresas para ser parte de nuestro grupo familiar MilTel"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.editarQuienesSomos = (req, res) => {
  const id = req.body._id;
  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      console.log("Error de edición ")
    } else {
      console.log("Campos editados")
    }
  })
}

/* LISTAR QUIENES SOMOS */
/**
 * @api {get} /listarQuienesSomos Listar los datos personales de la empresa "Mision, Vision"..
 * @apiName listarQuienesSomos
 * @apiGroup quienesSomos
 * @apiParam {Number} id de los datos de quienes Somos. Ejm. "_id": "63618bd7fb9c056f5f675007"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.listarQuienesSomos = (req, res) => {
  datos.find().exec((error, data) => {
    if (error) {
      console.log("Error al mostrar los datos")
    } else {
      /* console.log({ data: data }) */
      return res.status(200).json({
        data:data
      });
    }
  })
}

/* ELIMINAR QUIENES SOMOS*/
/**
 * @api {post} /eliminarQuienesSomos Eliminar los datos personales de la empresa "Mision, Vision".
 * @apiName eliminarQuienesSomos
 * @apiGroup quienesSomos
 * @apiParam {Number} id de los datos de quienes Somos. Ejm. "_id": "63618bd7fb9c056f5f675007"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.eliminarQuienesSomos = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}

/* BUSCAR QUIENES SOMOS POR ID */
exports.buscarQuienesSomos = async (req, res) => {
  const id = req.params.id;
  datos.findById(id, (error, data) => {
    if (error) {
      return res.status(500).json({
        message: 'Error al obtener registro',
        error: error
      })
    }
    if (!data) {
      return res.status(404).json({
        message: 'No existe registro'
      })
    }
    return res.status(200).json(data)
  })
}