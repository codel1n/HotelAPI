const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation.controller.js');

router.post('/', reservationController.create);
router.get('/', reservationController.findAll);       
router.get('/:id', reservationController.findOne);
router.put('/:id', reservationController.update);
router.delete('/:id', reservationController.delete);

module.exports = router;
