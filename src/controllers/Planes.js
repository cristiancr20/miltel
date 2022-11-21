const datos = require('../models/planes');

/* REGISTRO DE PLANES */
/**
 * @api {post} /registrarPlanes Registrar los planes que se puede adquirir
 * @apiName registrarPlanes
 * @apiGroup Planes
 *
 * @apiParam {String} Tipo de plan Ejm. "tipo":"Fibra Optica V2"
 * @apiParam {String} Cobertura que se va a brindar. Ejm."cobertura": "20 Mbps"
 * @apiParam {String} Nombre del plan. Ejm. "nombre":"BDH"
 * @apiParam {String} Costo del plan, es decir valor a pagar. Ejm. "costo":"16"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
/**
 * @api {post} /editarPlanes Editar los planes que se pueda adquirir
 * @apiName editarPlanes
 * @apiGroup Planes
 *
 * @apiParam {Numbre} Id del plan que se quiere editar. Ejm.  "_id":"6362e4d002139d0cad99e502",
 * @apiParam {String} Tipo de plan Ejm. "tipo":"Fibra Optica V2"
 * @apiParam {String} Cobertura que se va a brindar. Ejm."cobertura": "20 Mbps"
 * @apiParam {String} Nombre del plan. Ejm. "nombre":"BDH"
 * @apiParam {String} Costo del plan, es decir valor a pagar. Ejm. "costo":"16"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
/**
 * @api {get} /listarPlanes Listar todos los datos de Planes
 * @apiName listarPlanes
 * @apiGroup Planes
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.listarPlanes = (req, res) => {
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

/* ELIMINAR PLANES */
/**
 * @api {post} /eliminarPlanes Eliminar los planes que se desee 
 * @apiName eliminarPlanes
 * @apiGroup Planes
 *
 * @apiParam {Numbre} Id del plan que se quiere editar. Ejm.  "_id":"6362e4d002139d0cad99e502"
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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