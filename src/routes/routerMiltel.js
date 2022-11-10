const express = require('express');
const router = express.Router();

const{registroMiltel, edicionMiltel,listarMiltel, eliminarMiltel} =  require('../controllers/Miltel')

router.post('/registroMiltel', registroMiltel);
router.post('/edicionMiltel', edicionMiltel);
router.get('/listarMiltel', listarMiltel);
router.post('/eliminarMiltel', eliminarMiltel);

module.exports = router;