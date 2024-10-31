const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacion.controller.js');

router.post('/', facturacionController.create);
router.get('/', facturacionController.findAll);
router.get('/:id', facturacionController.findOne);
router.put('/:id', facturacionController.update);
router.delete('/:id', facturacionController.delete);

module.exports = router;