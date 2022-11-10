const express = require('express');
const router = express.Router();

const {registrarFormaPago, editarFormaPago, listarFormaPago, eliminarFormasPago}= require('../controllers/formasPago');

router.post('/registrarFormaPago',registrarFormaPago);
router.post('/editarFormaPago',editarFormaPago);
router.get('/listarFormaPago',listarFormaPago);
router.post('/eliminarFormasPago', eliminarFormasPago)

module.exports = router;