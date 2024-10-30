module.exports = (sequelize, Sequelize) => {
  const Cliente = sequelize.define('cliente', {
    id_huesped: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    birthdate: {
      type: Sequelize.DATEONLY
    },
    type_Doc: {
      type: Sequelize.STRING
    },
    no_Doc: {
      type: Sequelize.STRING
    },
    nacionalidad: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING,
      allowNull: true
    },
    address: {
      type: Sequelize.STRING,
      allowNull: true
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: 'Active'
    }
  });

  return Cliente;
};
