module.exports = (sequelize, Sequelize) => {
    const Room = sequelize.define('room', {
      id_room: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type_room: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cost_room: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      state_room: {
        type: Sequelize.ENUM('DISPONIBLE', 'OCUPADA', 'RESERVADA', 'MANTENIMIENTO', 'NO DISPONIBLE'),  // Agregamos "NO DISPONIBLE" al ENUM
        defaultValue: 'DISPONIBLE'
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      description: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_maintenance_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      }
    }, {
      timestamps: false
    });
  
    return Room;
  };
  