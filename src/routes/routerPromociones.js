const express = require('express');
const router = express.Router();

const {registrarPromociones, editarPromociones, listarPromociones, eliminarPromociones} = require('../controllers/Promociones')

router.post('/registrarPromociones', registrarPromociones);
router.post('/editarPromociones', editarPromociones);
router.get('/listarPromociones', listarPromociones);
router.post('/eliminarPromociones', eliminarPromociones);

module.exports = router;
