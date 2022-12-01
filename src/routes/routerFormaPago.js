const express = require('express');
const router = express.Router();

const {registrarFormaPago, editarFormaPago, listarFormaPago, eliminarFormasPago, buscarFormasPago, subirArchivo}= require('../controllers/formasPago');

router.post('/registrarFormaPago',registrarFormaPago);
router.post('/editarFormaPago',editarFormaPago);
router.get('/listar/forma/pago',listarFormaPago);
router.post('/eliminarFormasPago', eliminarFormasPago)
router.get('/buscar/formas/pago/:id', buscarFormasPago)
router.post('/subir/archivo', subirArchivo)

module.exports = router;