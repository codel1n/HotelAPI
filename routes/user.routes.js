const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller.js');

router.post('/', userController.create);       // Crear un nuevo usuario
router.get('/', userController.findAll);       // Obtener todos los usuarios
router.get('/:id', userController.findOne);    // Obtener un usuario por id
router.put('/:id', userController.update);     // Actualizar un usuario por id
router.delete('/:id', userController.delete);  // Soft delete de un usuario

module.exports = router;
