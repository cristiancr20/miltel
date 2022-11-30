const { request } = require('express')
const datos = require ('../models/promociones')

/* REGISTRAR PROMOCIONES */

/**
 * @api {post} /registrarPromociones Registrar las promociones
 * @apiName registrarPromociones
 * @apiGroup Promociones
 *
 * @apiParam {String} Nombre de la promocion. Ejem. "nombre":"Super"
 * @apiParam {String} La velocidad con se va adquirir. Ejem. "velocidad": "40 MBPS"
 *@apiParam {String} Descripcion de las plataformas que vienen en la promocion. Ejem. "descripcion": "Disney+"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
/**
 * @api {post} /editarPromociones Edita las promociones
 * @apiName editarPromociones
 * @apiGroup Promociones
 *
 * @apiParam {Number} Id de la promocion Ejm. "_id":"6369414484031672160411cf"
 * @apiParam {String} Nombre de la promocion. Ejem. "nombre":"Super"
 * @apiParam {String} La velocidad con se va adquirir. Ejem. "velocidad": "40 MBPS"
 *@apiParam {String} Descripcion de las plataformas que vienen en la promocion. Ejem. "descripcion": "Disney+"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

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

/**
 * @api {get} /listarPromociones Listar todos los datos de las promociones.
 * @apiName listarPromociones
 * @apiGroup Promociones
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
      /* console.log({ data: data }) */
      return res.status(200).json({
        data:data
      });
    }
  })
}

/* ELIMINAR PROMOCIONES */
/**
 * @api {post} /eliminarPromociones Edita las promociones
 * @apiName eliminarPromociones
 * @apiGroup Promociones
 *
 * @apiParam {Number} Id de la promocion Ejm. "_id":"6369414484031672160411cf"
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */


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

/* BUSCAR PROMOCIONES POR ID */
exports.buscarPromociones = async (req, res) => {
  try {
    const promociones = await datos.findById(req.params.id);
    res.status(200).json(promociones);
  } catch (err) {
    res.status(500).json(err);
  }
}