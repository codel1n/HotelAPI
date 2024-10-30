const db = require('../models');
const User = db.user;

exports.create = (req, res) => {
  User.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  User.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  User.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `No se encontró el usuario con id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  User.update(req.body, { where: { id_user: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Usuario actualizado correctamente." });
      } else {
        res.send({ message: `No se puede actualizar el usuario con id=${id}. Verifica los datos ingresados.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  User.update({ status: 'INACTIVO' }, { where: { id_user: id } })  // Soft delete, cambiando el estado a INACTIVO
    .then(num => {
      if (num == 1) {
        res.send({ message: "Usuario eliminado (soft delete)." });
      } else {
        res.send({ message: `No se puede eliminar el usuario con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
