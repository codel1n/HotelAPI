module.exports = (sequelize, Sequelize) => {
  const Service = sequelize.define('service', {
    id_service: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
  });

  return Service;
};
