const express = require('express');
const router = express.Router();

const {registrarPlanes, editarPlanes, listarPlanes, eliminarPlanes, buscarPlanes}= require('../controllers/Planes');

router.post('/registrarPlanes', registrarPlanes);
router.post('/editarPlanes', editarPlanes);
router.get('/listar/planes', listarPlanes)
router.post('/eliminarPlanes', eliminarPlanes);
router.get('/buscar/planes/:id', buscarPlanes)

module.exports = router;
