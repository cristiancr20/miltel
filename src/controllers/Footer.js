const datos = require('../models/footer');

/* REGISTRAR OPCIONES */
/**
 * @api {post} /registrarFooter Registrar las opciones para mas información del Footer 
 * @apiName registrarFooter
 * @apiGroup Footer
 *
 * @apiParam {String} Nombre de opción. Ejem. "nombre":"Ayuda y soluciones"
 * @apiParam {String} La url de la opción ingresada la cual redirigira a otro lugar.
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.registrarFooter = (req, res)=> {
  /*
    Ejemplo de registro en Postman 
  {
    "opciones":{
          "nombre":"Ayuda y soluciones",
          "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
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
      /* console.log("Registro de Footer exitoso") */
      return res.status(201).json({
        user: user
      });
    }
  })
}

/* EDITAR OPCIONES */

/**
 * @api {post} /editarFooter Editar los datos del Footer
 * @apiName editarFooter
 * @apiGroup Footer
 *  
 * @apiParam {Number} id del dato que se desea modificar. Ejm. "_id": "63618bd7fb9c056f5f675007"
 * @apiParam {String} Nombre de opción. Ejem. "nombre":"Ayuda y soluciones"
 * @apiParam {String} La url de la opción ingresada la cual redirigira a otro lugar.
 *
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.editarFooter = (req,res)=>{

  /* {
    "_id": "63618bd7fb9c056f5f675007",
    "opciones":{
          "nombre":"Ayuda y soluciones",
          "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    }
  } */
  const id = req.body._id;
  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      /* console.log("Error de edición") */
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

/* LISTAR FOOTER */
/**
 * @api {get} /listarFooter Listar todos las opciones del Footer.
 * @apiName listarFooter
 * @apiGroup Footer
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.listarFooter =(req, res)=>{

  /* {
    
    "opciones":{
          "nombre":"Ayuda y soluciones",
          "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg"
    },
    "_id": "63618bd7fb9c056f5f675007",
  } 
   */
  datos.find().exec((error, data) => {
    if (error) {
      /* console.log("Error al mostrar los datos") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log({ data: data }) */
      return res.status(201).json({
        data:data
      });
    }
  })
}

/* ELIMINAR FOOTER */
/**
 * @api {post} /eliminarFooter Elimina el datos del footer que se desee.
 * @apiName eliminarFooter
 * @apiGroup Footer
 *
 * @apiParam {Number} id del dato. Ejm "_id": "63618bd7fb9c056f5f675007",
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.eliminarFooter = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      /* console.log("Error de eliminación") */
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log("Campos eliminado") */
      return res.status(201).json({
        data:data
      });
    }
  })
}

/* BUSCAR FOOTER POR ID */
exports.buscarFooter = async (req, res) => {
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