const express = require('express');
const router = express.Router();
const facturacionController = require('../controllers/facturacion.controller.js');

router.post('/', facturacionController.create);       // Crear un nuevo pago/factura
router.get('/', facturacionController.findAll);       // Obtener todos los pagos/facturas
router.get('/:id', facturacionController.findOne);    // Obtener un pago/factura por id
router.put('/:id', facturacionController.update);     // Actualizar un pago/factura por id
router.delete('/:id', facturacionController.delete);  // Soft delete de un pago/factura

module.exports = router;