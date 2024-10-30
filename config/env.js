const dotenv = require('dotenv');
dotenv.config(); // Cargar variables de entorno desde el archivo .env

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  DIALECT: process.env.DB_DIALECT || 'postgres',
  PORT: process.env.DB_PORT || 5432,
};
