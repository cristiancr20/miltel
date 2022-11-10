const datos = require('../models/miltel');

/* REGISTRO DE LOS DATOS DE LA PÁGINA PRINCIPAL */
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
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Cobertura exitoso")
    }
  })
}

/* EDICIÓN DE LOS DATOS DE LA PÁGINA PRINCIPAL */

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
      console.log("Error de edición ")
    } else {
      console.log("Campos editados")
    }
  })
}

/* LISTAR DATOS DE LA PÁGINA PRINCIPAL */

exports.listarMiltel = (req, res) => {
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

exports.eliminarMiltel = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}