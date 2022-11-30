const express = require('express');
const router = express.Router();

const {registrarPromociones, editarPromociones, listarPromociones, eliminarPromociones, buscarPromociones} = require('../controllers/Promociones')

router.post('/registrarPromociones', registrarPromociones);
router.post('/editarPromociones', editarPromociones);
router.get('/listar/promociones', listarPromociones);
router.post('/eliminarPromociones', eliminarPromociones);
router.get('/buscar/promociones/:id', buscarPromociones)

module.exports = router;
