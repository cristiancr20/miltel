const express = require('express');
const router = express.Router();

const {registrarPlanes, editarPlanes, listarPlanes, eliminarPlanes}= require('../controllers/Planes');

router.post('/registrarPlanes', registrarPlanes);
router.post('/editarPlanes', editarPlanes);
router.get('/listarPlanes', listarPlanes)
router.post('/eliminarPlanes', eliminarPlanes);

module.exports = router;
