const express = require('express');
const router = express.Router();

const{registrarFooter, editarFooter, listarFooter, eliminarFooter}= require('../controllers/Footer');

router.post('/registrarFooter', registrarFooter);
router.post('/editarFooter', editarFooter);
router.get('/listarFooter', listarFooter);
router.post('/eliminarFooter', eliminarFooter);

module.exports = router;
