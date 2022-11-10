const datos = require('../models/footer');

/* REGISTRAR OPCIONES */
exports.registrarOpcion = (req, res)=> {
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
      console.log("Revisar Datos")
    } else {
      console.log("Registro de Footer exitoso")
    }
  })
}

/* EDITAR OPCIONES */
exports.editarOpcion = (req,res)=>{
  const id = req.body._id;
  datos.findByIdAndUpdate(id, (req.body), (error, data) => {

    if (error) {
      console.log("Error de edición ")
    } else {
      console.log("Campos editados")
    }
  })
}

exports.listarOpcion =(req, res)=>{
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

exports.eliminarOpcion = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}