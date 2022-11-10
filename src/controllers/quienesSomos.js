const datos = require('../models/quienesSomos');

/* REGISTRAR QUIENES SOMOS */
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

exports.listarQuienesSomos = (req, res) => {
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