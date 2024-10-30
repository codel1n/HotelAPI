const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room.controller.js');

router.post('/', roomController.create);       // Crear una nueva habitación
router.get('/', roomController.findAll);       // Obtener todas las habitaciones
router.get('/:id', roomController.findOne);    // Obtener una habitación por id
router.put('/:id', roomController.update);     // Actualizar una habitación por id
router.delete('/:id', roomController.delete);  // Soft delete de una habitación

module.exports = router;
