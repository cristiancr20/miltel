const express = require('express');
const router = express.Router();
const {registrarPersona, editarPersona, editarEstado, iniciarSesion, eliminarUsuario, listarUsuario }= require('../controllers/Usuario')

router.post('/registrarUsuario', registrarPersona);
router.post('/editarUsuario', editarPersona);
router.post('/editarEstado', editarEstado);
router.post('/iniciarSesion', iniciarSesion);
router.post('/eliminarUsuario', eliminarUsuario)
router.get('/listarUsuario', listarUsuario);

module.exports = router;