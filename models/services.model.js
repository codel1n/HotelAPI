module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define('service', {
    // Eliminamos cualquier definición adicional de id_service
    id_service: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true, // Ahora Sequelize reconoce que es autoincremental
    },
    type_service: {
      type: Sequelize.STRING,
      allowNull: false
    },
    cost_serv: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    descripcion: {
      type: Sequelize.STRING,
      allowNull: false
    },
    availability: {
      type: Sequelize.BOOLEAN,
      defaultValue: true
    }
  }, {
    timestamps: false,
    omitNull: true,
    // Sequelize debe permitir que PostgreSQL maneje el id automáticamente
  });

  return Service;
};
