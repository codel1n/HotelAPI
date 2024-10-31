const db = require('../models');
const Employee = db.employee;

exports.create = (req, res) => {
  Employee.create(req.body)
    .then(data => res.send(data))
    .catch(err => {
      if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(400).send({
          message: "Solo puede existir un unico DPI"
        });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
};


exports.findAll = (req, res) => {
  Employee.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `No hay algun empleado con el id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Employee.update(req.body, { where: { id_colab: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Se ah actualizado el emplado correctamente" });
      } else {
        res.send({ message: `No se puede actualizar el empleado con id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Employee.update({ status: 'INACTIVO' }, { where: { id_colab: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Empleado eliminado correctamente" });
      } else {
        res.send({ message: `No se puede eliminar el empleado con id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};