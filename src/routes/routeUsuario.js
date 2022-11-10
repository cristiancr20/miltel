const express = require('express');
const router = express.Router();
const {registrarPersona, editarPersona, editarEstado, iniciarSesion, eliminarUsuario }= require('../controllers/Usuario')

router.post('/registrarPersona', registrarPersona);
router.post('/editarPersona', editarPersona);
router.post('/editarEstado', editarEstado);
router.post('/iniciarSesion', iniciarSesion);
router.post('/eliminarUsuario', eliminarUsuario)

module.exports = router;