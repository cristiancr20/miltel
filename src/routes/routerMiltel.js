const express = require('express');
const router = express.Router();

const{registroMiltel, edicionMiltel,listarMiltel, eliminarMiltel, buscarMiltel} =  require('../controllers/Miltel')

router.post('/registroMiltel', registroMiltel);
router.post('/edicionMiltel', edicionMiltel);
router.get('/listar/miltel', listarMiltel);
router.post('/eliminarMiltel', eliminarMiltel);
router.get('/buscar/miltel/:id', buscarMiltel);

module.exports = router;