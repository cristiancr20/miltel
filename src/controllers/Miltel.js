const datos = require('../models/miltel');

/* REGISTRO DE LOS DATOS DE LA PÁGINA PRINCIPAL */
/**
 * @api {post} /registroMiltel Registrar los datos principales de la página.
 * @apiName registroMiltel
 * @apiGroup Miltel
 *
 * @apiParam {String} URL de la imagen principal de la pagina de Miltel
 * @apiParam {String} Dimension de la imagen de la imagen de la pagina de Miltel
 * 
 * @apiParam {String} URL del video de la pagina de Miltel
 * @apiParam {String} Número de contacto de la pagina Miltel
 * @apiParam {String} Correo de la pagina Miltel
 * @apiParam {String} Mensaje de inicio de la página de Miltel
 * 
 * @apiParam {String} Nombre de la red social en la que se encuentre
 * @apiParam {String} URL del icono o imagen de la red social 
 * @apiParam {String} URL oficial de la red social. Ejm. "urlRedSocial": "www.facebook.com/miltel"
 *
 * @apiParam {String} URL de imagen de la forma de pago.
 * @apiParam {String} Nombre de la imagen de la forma de pago
 * @apiParam {String} Dimension de la imagen de la forma de pago
 * 
 * @apiParam {String} URL de la imagen de cobertura 
 * @apiParam {String} Nombre de la imagen de la cobertura
 * @apiParam {String} Dimension de la imagen de cobertura
 * 
 * @apiParam {String} Ingresamos el objetivo principal de la seccion Quienes Somos.
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.registroMiltel = (req, res) => {
  /* 
  EJEMPLO DE REGISTRO DE LOS DATOS EN POSTMAN
  {
    "imagenMiltel": {
        "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "dimension": "250 px"
    },
    "video": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "numeroContacto": "0999999",
    "correo": "cristian.capa@gmail.com",
    "mensajeInicio": "Ya llegó a Amaluza el internet de FIBRA ÓPTICA de máxima velocidad.",
    "redSocial": {
        "nombreRedSocial": "Facebook",
        "icono": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png",
        "urlRedSocial": "www.facebook.com"
    },
    "imagenFormaPago": {
        "nombreFormaPago": "Imagen forma de pago",
        "dimension": "250 px",
        "urlFormaPago": "https://www.verines.com/images/tipos_de_pago.jpg"
    },
    "imagenCobertura": {
        "nombreImagen": "Imagen Cobertura",
        "dimension": "250 px",
        "url": "https://www.un.int/ecuador/sites/www.un.int/files/Ecuador/mapaecuador.jpg"
    },
    "objetivoQuienesSomos": "MilTel es una empresa espindolense legalmente constituida en Ecuador, dedicada a la prestación de servicios de Internet, además brinda asesoramiento, diseño, fiscalización y construcción de proyectos en telecomunicaciones, con un soporte técnico eficiente y confiable."

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
      /* console.log("Registro de Cobertura exitoso") */
      return res.status(201).json({
        user: user
      });
    }
  })
}

/* EDICIÓN DE LOS DATOS DE LA PÁGINA PRINCIPAL */
/**
 * @api {post} /edicionMiltel Edita los datos principales de la página.
 * @apiName edicionMiltel
 * @apiGroup Miltel
 * 
 * @apiParam {Number} id de la información general
 * 
 * @apiParam {String} URL de la imagen principal de la pagina de Miltel
 * @apiParam {String} Dimension de la imagen de la imagen de la pagina de Miltel
 * 
 * @apiParam {String} URL del video de la pagina de Miltel
 * @apiParam {String} Número de contacto de la pagina Miltel
 * @apiParam {String} Correo de la pagina Miltel
 * @apiParam {String} Mensaje de inicio de la página de Miltel
 * 
 * @apiParam {String} Nombre de la red social en la que se encuentre
 * @apiParam {String} URL del icono o imagen de la red social 
 * @apiParam {String} URL oficial de la red social. Ejm. "urlRedSocial": "www.facebook.com/miltel"
 *
 * @apiParam {String} URL de imagen de la forma de pago.
 * @apiParam {String} Nombre de la imagen de la forma de pago
 * @apiParam {String} Dimension de la imagen de la forma de pago
 * 
 * @apiParam {String} URL de la imagen de cobertura 
 * @apiParam {String} Nombre de la imagen de la cobertura
 * @apiParam {String} Dimension de la imagen de cobertura
 * 
 * @apiParam {String} Ingresamos el objetivo principal de la seccion Quienes Somos.
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.edicionMiltel = (req, res) => {

  /* 
  Ejemplo de edicion de los datos en POSTMAN
  {
    "_id":"636c645cbf226505a284e290",
    "imagenMiltel": {
        "url": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
        "dimension": "350 px"
    },
    "video": "https://www.tooltyp.com/wp-content/uploads/2014/10/1900x920-8-beneficios-de-usar-imagenes-en-nuestros-sitios-web.jpg",
    "numeroContacto": "09999234234",
    "correo": "cristian@gmail.com",
    "mensajeInicio": "Ya llegó a Amaluza el internet de FIBRA ÓPTICA de máxima velocidad.",
    "redSocial": {
        "nombreRedSocial": "Facebook",
        "icono": "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Logo_de_Facebook.png/220px-Logo_de_Facebook.png",
        "urlRedSocial": "www.facebook.com"
    },
    "imagenFormaPago": {
        "nombreFormaPago": "Imagen forma de pago",
        "dimension": "250 px",
        "urlFormaPago": "https://www.verines.com/images/tipos_de_pago.jpg"
    },
    "imagenCobertura": {
        "nombreImagen": "Imagen Cobertura",
        "dimension": "250 px",
        "url": "https://www.un.int/ecuador/sites/www.un.int/files/Ecuador/mapaecuador.jpg"
    },
    "objetivoQuienesSomos": "MilTel es una empresa espindolense legalmente constituida en Ecuador, dedicada a la prestación de servicios de Internet, además brinda asesoramiento, diseño, fiscalización y construcción de proyectos en telecomunicaciones, con un soporte técnico eficiente y confiable."
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

/* LISTAR DATOS DE LA PÁGINA PRINCIPAL */
/**
 * @api {get} /listarMiltel Listar los datos principales de la página.
 * @apiName listarMiltel
 * @apiGroup Miltel
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.listarMiltel = (req, res) => {
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


/* ELIMINAR LOS DATOS GENERALES DE LA PÁGINA */
/**
 * @api {post} /eliminarMiltel Eliminar los datos principales de la página.
 * @apiName eliminarMiltel
 * @apiGroup Miltel
 * 
 * @apiParam {Number} id de la información general
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.eliminarMiltel = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
      return res.status(500).json({
        error:error
      });
    } else {
      console.log("Campos eliminado")
      return res.status(200).json({
        data:data
      });
    }
  })
}