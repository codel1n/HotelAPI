const Sequelize = require('sequelize');
const dbConfig = require('../config/dbconfig.js');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.DIALECT,
  port: dbConfig.PORT,
  dialectOptions: dbConfig.dialectOptions,
  pool: dbConfig.pool
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.cliente = require('./cliente.model.js')(sequelize, Sequelize);
db.services = require('./services.model.js')(sequelize, Sequelize);
db.room = require('./room.model.js')(sequelize, Sequelize);
db.reservation = require('./reservation.model.js')(sequelize, Sequelize);
db.employee = require('./employee.model.js')(sequelize, Sequelize);
db.facturacion = require('./facturacion.model.js')(sequelize, Sequelize);
db.user = require('./user.model.js')(sequelize, Sequelize);

module.exports = db;
