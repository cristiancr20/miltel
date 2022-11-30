const express = require('express');
const router = express.Router();

const{registrarFooter, editarFooter, listarFooter, eliminarFooter, buscarFooter}= require('../controllers/Footer');

router.post('/registrarFooter', registrarFooter);
router.post('/editarFooter', editarFooter);
router.get('/listar/footer', listarFooter);
router.post('/eliminarFooter', eliminarFooter);
router.get('/buscar/footer/:id', buscarFooter);

module.exports = router;
