const db = require('../models');
const Room = db.room;

exports.create = (req, res) => {
  Room.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Room.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Room.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `No se encontró la habitación con id ${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Room.update(req.body, { where: { id_room: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Habitación actualizada correctamente." });
      } else {
        res.send({ message: `No se puede actualizar la habitación con id=${id}. Verifica los datos ingresados.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Room.update({ state_room: 'NO DISPONIBLE' }, { where: { id_room: id } }) // Soft delete
    .then(num => {
      if (num == 1) {
        res.send({ message: "Habitación eliminada (soft delete)." });
      } else {
        res.send({ message: `No se puede eliminar la habitación con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
