const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.post('/', clienteController.create);
router.get('/', clienteController.findAll);
router.get('/:id', clienteController.findOne);
router.put('/:id', clienteController.update);
router.delete('/:id', clienteController.delete);

module.exports = router;
