const db = require('../models');
const Reservation = db.reservation;
const Room = db.room;
const Service = db.services;

exports.create = async (req, res) => {
  try {
    const { id_huesped, id_room, date_in, date_out, id_services, type_pay, status, comments } = req.body;

    const dateIn = new Date(date_in);
    const dateOut = new Date(date_out);
    const nights = Math.ceil((dateOut - dateIn) / (1000 * 60 * 60 * 24));

    const room = await Room.findByPk(id_room);
    if (!room) return res.status(404).json({ message: "Habitacion No encontrada" });

    const serviceId = parseInt(id_services);
    if (isNaN(serviceId)) return res.status(400).json({ message: "Servicio no valido" });

    const service = await Service.findByPk(serviceId);
    if (!service) return res.status(404).json({ message: "Servicio no encontrado" });

    let totalPay = (room.cost_room * nights) + (service.cost_serv * nights);

    const nuevaReserva = await Reservation.create({
      id_huesped,
      id_room,
      date_in,
      date_out,
      type_room: room.type_room,
      id_services: serviceId.toString(),
      type_pay,
      total_pay: totalPay,
      status,
      comments
    });

    res.status(201).json(nuevaReserva);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.findAll = (req, res) => {
  Reservation.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Reservation.findByPk(id)
    .then(data => {
      if (data) res.send(data);
      else res.status(404).send({ message: `No se pudo encontrar la reserva con id=${id}` });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Reservation.update(req.body, { where: { id_reserv: id } })
    .then(num => {
      if (num == 1) res.send({ message: "La reserva ah sido actualizada correctamente" });
      else res.send({ message: `No se a podido actualizar la reserva con id=${id}` });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Reservation.update({ status: 'CANCELADA' }, { where: { id_reserv: id } })
    .then(num => {
      if (num == 1) res.send({ message: "La reserva a sido cancelada correctamente" });
      else res.send({ message: `No se ah podifo actualizar la reserva con el id=${id}` });
    })
    .catch(err => res.status(500).send({ message: err.message }));
};
