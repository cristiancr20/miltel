const express = require('express');
const router = express.Router();

const{registrarOpcion, editarOpcion, listarOpcion, eliminarOpcion}= require('../controllers/Footer');

router.post('/registrarOpcion', registrarOpcion);
router.post('/editarOpcion', editarOpcion);
router.get('/listarOpcion', listarOpcion);
router.post('/eliminarOpcion', eliminarOpcion);

module.exports = router;
