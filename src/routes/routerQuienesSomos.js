const express = require('express');
const router = express.Router();

const{registrarQuienesSomos, editarQuienesSomos, listarQuienesSomos, eliminarQuienesSomos, buscarQuienesSomos} = require('../controllers/quienesSomos')

router.post('/registrarQuienesSomos', registrarQuienesSomos);
router.post('/editarQuienesSomos', editarQuienesSomos);
router.get('/listar/quienes/somos', listarQuienesSomos);
router.post('/eliminarQuienesSomos', eliminarQuienesSomos);
router.get('/buscar/quienes/somos/:id', buscarQuienesSomos);

module.exports = router;