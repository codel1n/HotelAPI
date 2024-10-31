const db = require('../models');
const Service = db.services;

exports.create = (req, res) => {
  Service.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Service.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Service.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `Servicio no encontrado id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Service.update(req.body, { where: { id_service: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'Servicio actualizado correctamente' });
      } else {
        res.send({ message: `No se pudo actualizar el servico con el id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Service.update({ availability: false }, { where: { id_service: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'Servicio Eliminado correctamente' });
      } else {
        res.send({ message: `No sea podido eliminar el servicio id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

