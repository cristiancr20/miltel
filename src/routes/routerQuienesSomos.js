const express = require('express');
const router = express.Router();

const{registrarQuienesSomos, editarQuienesSomos, listarQuienesSomos, eliminarQuienesSomos} = require('../controllers/quienesSomos')

router.post('/registrarQuienesSomos', registrarQuienesSomos);
router.post('/editarQuienesSomos', editarQuienesSomos);
router.get('/listarQuienesSomos', listarQuienesSomos);
router.post('/eliminarQuienesSomos', eliminarQuienesSomos);

module.exports = router;