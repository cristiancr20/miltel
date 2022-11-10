const datos = require('../models/usuario');

/* REGISTRAR USUARIO*/
exports.registrarPersona = (req, res) => {
  /* 
  Ejemplo en Postman de como registrar un usuario

  { 
    "nombre": "Cristian", 
    "apellido":"Capa", 
    "correo": "test@test.com", 
    "contrasena":"test123", 
    "estado": "Activo" 
  }
  */
  const { nombre, apellido, correo, contrasena, estado } = req.body;

  const nuevoRegistro = new datos({
    nombre,
    apellido,
    correo,
    contrasena,
    estado
  })
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro exitoso")
    }
  })
}

/* EDITAR DATOS DE USUARIO SIN EL ESTADO*/

exports.editarPersona = (req, res) => {
  
/* 
  Ejemplo de Postman para la edicion de la informacion del usuario, 
  aquí no se editara el estado del usuario.
  Primeramente se pide el _id del usuario para poder realizar la busqueda,
  junto con el _id tambien los datos que desea cambiar.

  {
        "_id": "635c5f0e702489c2df5acd22",
        "nombre": "Cristian",
        "apellido": "Capa",
        "correo": "cristian.capa@unl.edu.ec",
        "contrasena": "capita"
        
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

/* EDITAR EL ESTADO DEL USUARIO */
exports.editarEstado = (req, res) => {
/* 
  Ejemplo en Postman de como editar el estado del usuario.
  Primeramente se pide el id del usuario, para poder realizar la busqueda
  y tambien el dato que se desea editar en este caso el estado del usuario
  {
    "_id":"635c5f0e702489c2df5acd22",
    "estado": "Inactivo"
        
  }
*/

  const id = req.body._id;
  const estado = req.body.estado;

  datos.findByIdAndUpdate(id, { estado }, (error, data) => {
    if (error) {
      console.log("Error de edicion del estado ")
    } else {
      console.log("Estado de la persona editado")
    }
  })
}


/* INICIO DE SESION DEL USUARIO */
exports.iniciarSesion = (req, res) => {

  /* 
  Para el inicio de sesion del usuario, los datos requeridos
  son el correo, contrasena y el estado el cual debera estar "Activo"
  para poder iniciar sesion, caso contrario se negara el inicio de sesion.
  
  {
    "correo":"erika@gmail.com",
    "contrasena": "1234",
    "estado": "Activo"
  }
  */

  const { correo, contrasena } = req.body;

  datos.findOne({ correo }, (error, user) => {
    if (error || !user) {
      console.log("Error, persona no encontrada");
    }

    const email = user.correo;
    const password = user.contrasena;
    const estado = user.estado;

    if (correo === email && contrasena === password && estado === "Activo") {
      console.log("Bienvenido");
    } else {
      console.log("Campos Invalidos")
    }
  })
}


exports.eliminarUsuario  = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id,(req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}
