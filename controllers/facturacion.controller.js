const db = require('../models');
const Facturacion = db.facturacion;

exports.create = (req, res) => {
  Facturacion.create(req.body)
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Facturacion.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Facturacion.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({ message: `No se encontró el pago/factura con id=${id}` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Facturacion.update(req.body, { where: { id_pay: id } })
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pago/Factura actualizado correctamente." });
      } else {
        res.send({ message: `No se puede actualizar el pago/factura con id=${id}. Verifica los datos ingresados.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Facturacion.update({ status_pay: 'CANCELADO' }, { where: { id_pay: id } })  // Soft delete cambiando el estado a CANCELADO
    .then(num => {
      if (num == 1) {
        res.send({ message: "Pago/Factura cancelado (soft delete)." });
      } else {
        res.send({ message: `No se puede cancelar el pago/factura con id=${id}.` });
      }
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
