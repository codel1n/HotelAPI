const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller.js');

router.post('/', reservationController.create);       // Crear una nueva reserva
router.get('/', reservationController.findAll);       // Obtener todas las reservas
router.get('/:id', reservationController.findOne);    // Obtener una reserva por id
router.put('/:id', reservationController.update);     // Actualizar una reserva por id
router.delete('/:id', reservationController.delete);  // Soft delete de una reserva

module.exports = router;
