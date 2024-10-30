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
        res.status(404).send({ message: `Service not found with id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Service.update(req.body, { where: { id_service: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'Service updated successfully.' });
      } else {
        res.send({ message: `Cannot update Service with id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Service.update({ availability: false }, { where: { id_service: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'Service deleted successfully (soft delete).' });
      } else {
        res.send({ message: `Cannot delete Service with id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

