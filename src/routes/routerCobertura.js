const express = require('express');
const router = express.Router();
const{registrarCobertura, editarCobertura, listarCobertura, eliminarCobertura} = require("../controllers/Cobertura")

router.post('/registrarCobertura', registrarCobertura);
router.post('/editarCobertura', editarCobertura);
router.get('/listarCobertura', listarCobertura);
router.post('/eliminarCobertura', eliminarCobertura);

module.exports = router;