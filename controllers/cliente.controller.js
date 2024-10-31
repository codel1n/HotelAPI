const db = require('../models');
const Cliente = db.cliente;

exports.create = (req, res) => {
  Cliente.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Cliente.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Cliente.findByPk(id)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Cliente.update(req.body, { where: { id_huesped: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'El cliente se actualizo correctamente' });
      } else {
        res.send({ message: `no se puede actualizar con el id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Cliente.update({ state: 'inactive' }, { where: { id_huesped: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: 'Cliente eliminado correctamente' });
      } else {
        res.send({ message: `no se pudo eliminra con el id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
