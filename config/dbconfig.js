const { DB, USER, PASSWORD, HOST, DIALECT, PORT } = require('./env.js');

module.exports = {
  DB,
  USER,
  PASSWORD,
  HOST,
  DIALECT,
  PORT,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
