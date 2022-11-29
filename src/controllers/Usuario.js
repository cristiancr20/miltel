const datos = require('../models/usuario');

/* REGISTRAR USUARIO*/
/**
 * @api {post} /registrarUsuario Registrar los datos personales para el usuario como son nombre, apellido, correo, contrasena y el estado
 * @apiName registrarPersona
 * @apiGroup Usuario
 *
 * @apiParam {String}  Nombre del usuario. Ejem. "nombre": "Cristian"
 * @apiParam {String} Apellido del usuario. Ejem. "apellido": Capa"
 * @apiParam {String} Correo del usuario. Ejem "correo":"test@test.com"
 * @apiParam {String} Cotrasena del usuario. Ejem.
 * "contrasena":"test123"
 * @apiParam {String} El estado del usuario el cual sirve para poder tener acceso a la cuenta. Ejem. "estado": "Activo" 
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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

  const nuevoRegistro = new datos(req.body);
  nuevoRegistro.save((error, user) => {
    if (error) {
      console.log("Revisar Datos")
    } else {
      console.log("Registro exitoso")
    }
  })
}

/* EDITAR DATOS DE USUARIO SIN EL ESTADO*/
/**
 * @api {post} /editarUsuario Editar los datos personales para el usuario como son nombre, apellido, correo, contrasena y el estado
 * @apiName editarPersona
 * @apiGroup Usuario
 *
 * @apiParam {Number} id del usuario
 * @apiParam {String}  Nombre del usuario. Ejem. "nombre": "Cristian"
 * @apiParam {String} Apellido del usuario. Ejem. "apellido": Capa"
 * @apiParam {String} Correo del usuario. Ejem "correo":"test@test.com"
 * @apiParam {String} Cotrasena del usuario. Ejem.
 * "contrasena":"test123"
 * @apiParam {String} El estado del usuario el cual sirve para poder tener acceso a la cuenta. Ejem. "estado": "Activo" 
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
/**
 * @api {post} /editarEstado Editar el estado del usuario para su inicio de sesion  
 * @apiName editarEstado
 * @apiGroup Usuario
 *
 * @apiParam {Number} id del usuario
 * @apiParam {String} El estado del usuario el cual sirve para poder tener acceso a la cuenta. Ejem. "estado": "Activo" 
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
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
/**
 * @api {post} /iniciarSesion Iniciar sesion de la cuenta con los datos de correo y contrasena, los cuales debe ingresar el usuario, internamente tambien pide el estado del usuairo el cual debe estar "Activo"
 * @apiName editarPersona
 * @apiGroup Usuario
 *
 * @apiParam {String} Correo del usuario. Ejem "correo":"test@test.com"
 * @apiParam {String} Cotrasena del usuario. Ejem.
 * "contrasena":"test123"
 * @apiParam {String} El estado del usuario el cual sirve para poder tener acceso a la cuenta. Ejem. "estado": "Activo" 
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */

exports.iniciarSesion = (req, res) => {

  /* 
  Para el inicio de sesion del usuario, los datos requeridos
  son el correo, contrasena y el estado el cual debera estar "Activo"
  para poder iniciar sesion, caso contrario se negara el inicio de sesion.
  
  {
    "correo":"erika@gmail.com",
    "contrasena": "1234",
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

/* LISTAR USUARIO */
/**
 * @api {get} /listarUsuario Lista todos los usuario que se tenga en la base de datos
 * @apiName listarUsuario
 * @apiGroup Usuario
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.listarUsuario = (req, res) => {
  datos.find().exec((error, data) => {
    if (error) {
      console.log("Error al mostrar los datos")
      return res.status(500).json({
        error:error
      });
    } else {
      /* console.log({ data: data }) */
      return res.status(200).json({
        data: data
      });
    }
  })
}

/* Eliminar Usuarios */

/**
 * @api {post} /eliminarUsuario Eliminar al usuario 
 * @apiName eliminarUsuario
 * @apiGroup Usuario
 *
 * @apiParam {Number} id del usuario
 * 
 * @apiSuccess {Object}:{}
 * @apiError {Object}:{}
 */
exports.eliminarUsuario = (req, res) => {
  const id = req.body._id;

  datos.findByIdAndRemove(id, (req.body), (error, data) => {
    if (error) {
      console.log("Error de eliminación ")
    } else {
      console.log("Campos eliminado")
    }
  })
}

/* BUSCAR USUARIO POR ID */
exports.buscarUsuario = async (req, res) => {
  try {
    const usuario = await datos.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (err) {
    res.status(500).json(err);
  }
}