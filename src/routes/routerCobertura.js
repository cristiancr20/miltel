const express = require('express');
const router = express.Router();
const{registrarCobertura, editarCobertura, 
  listarCobertura, eliminarCobertura, buscarCobertura} = 
  require("../controllers/Cobertura")

router.post('/registrarCobertura', registrarCobertura);
router.post('/editarCobertura', editarCobertura);
router.get('/listar/cobertura', listarCobertura);
router.post('/eliminarCobertura', eliminarCobertura);
router.get('/buscar/cobertura/:id', buscarCobertura);


module.exports = router;