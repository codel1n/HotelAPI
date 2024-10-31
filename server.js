const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require('./models');
db.sequelize.sync();

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to HotelAPI' });
});

const authRoutes = require('./routes/auth.routes');
const clienteRoutes = require('./routes/cliente.routes');
const serviceRoutes = require('./routes/service.routes');
const roomRoutes = require('./routes/room.routes');
const reservationRoutes = require('./routes/reservation.routes');
const employeeRoutes = require('./routes/employee.routes');
const facturacionRoutes = require('./routes/facturacion.routes');
const userRoutes = require('./routes/user.routes');

app.use('/auth', authRoutes);
app.use('/clientes', clienteRoutes);
app.use('/services', serviceRoutes);
app.use('/rooms', roomRoutes);
app.use('/reservations', reservationRoutes);
app.use('/employees', employeeRoutes);
app.use('/facturacion', facturacionRoutes);
app.use('/users', userRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El servidor se esta ejecutando en el puerto: ${PORT}.`);
});