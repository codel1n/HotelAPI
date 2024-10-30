const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller.js');

router.post('/', employeeController.create);       // Crear un nuevo empleado
router.get('/', employeeController.findAll);       // Obtener todos los empleados
router.get('/:id', employeeController.findOne);    // Obtener un empleado por id
router.put('/:id', employeeController.update);     // Actualizar un empleado por id
router.delete('/:id', employeeController.delete);  // Soft delete de un empleado

module.exports = router;
