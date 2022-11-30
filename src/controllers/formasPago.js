const datos = require('../models/formasPago');

/* REGISTRO DE FORMAS DE PAGO */

/**
 * @api {post} /registrarFormaPago Registrar los datos de la forma de pago.
 * @apiName registrarFormaPago
 * @apiGroup formasPago
 *
 * @apiParam {String} Nombre del tipo de pago que se realizará. Ejm. "nombre": "Pagos en efectivo"
 * @apiParam {String} la URL de la imagen que vamos a colocar. Ejm. "url": "https://dplnews.com/wp-content/uploads/2019/04/dplnews_efectivo_jb190419.jpg"
 * @apiParam {String} Nombre de la imagen.
 * @apiParam {String} la dimension o tamano de la imagen.
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
      /* console.log("Revisar Datos") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log("Registro de Forma de pago exitoso") */
      return res.status(201).json({
        user: user
      });
    }
  })
}

/* EDICION FORMA DE PAGO */

/**
 * @api {post} /editarFormaPago Editar los datos de formas de pago.
 * @apiName editarFormaPago
 * @apiGroup formasPago
 *
 * @apiParam {Number} id del dato forma de pago Ejm. "_id": "6362d8ea6bc747ce55d7ee42"
 * @apiParam {String} Nombre del tipo de pago que se realizará. Ejm. "nombre": "Pagos en efectivo"
 * @apiParam {String} la URL de la imagen que vamos a colocar. Ejm. "url": "https://dplnews.com/wp-content/uploads/2019/04/dplnews_efectivo_jb190419.jpg"
 * @apiParam {String} Nombre de la imagen.
 * @apiParam {String} la dimension o tamano de la imagen.
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

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
      /* console.log("Error de edición ") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log("Campos editados") */
      return res.status(201).json({
        user: user
      });
    }
  })
}

/* LISTAR FORMAS DE PAGO */

/**
 * @api {get} /listarFormaPago Se listan los datos de las formas de pagos.
 * @apiName editarFormaPago
 * @apiGroup formasPago
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

exports.listarFormaPago = (req, res)=>{
  datos.find().exec((error, data) => {
    if (error) {
      /* console.log("Error al mostrar los datos") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log({ data: data }) */
      return res.status(200).json({
        data:data
      });
    }
  })
}


/* ELIMINAR FORMAS PAGO */

/**
 * @api {post} /eliminarFormasPago Se eliman los datos de formas de pago.
 * @apiName eliminarFormasPago
 * @apiGroup formasPago
 *
 * @apiParam {Number} id del dato forma de pago Ejm. "_id": "6362d8ea6bc747ce55d7ee42"
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.eliminarFormasPago = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      /* console.log("Error de eliminación ") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log("Campos eliminado") */
      return res.status(200).json({
        data:data
      });
    }
  })
}

/* BUSCAR FORMAS PAGO POR ID */
exports.buscarFormasPago = async (req, res) => {
  try {
    const formasPago = await datos.findById(req.params.id);
    res.status(200).json(formasPago);
  } catch (err) {
    res.status(500).json(err);
  }
}