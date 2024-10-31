module.exports = (sequelize, Sequelize) => {
    const Reservation = sequelize.define('reservation', {
      id_reserv: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_huesped: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      id_room: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      date_in: {
        type: Sequelize.DATEONLY, 
        allowNull: false
      },
      date_out: {
        type: Sequelize.DATEONLY,  
        allowNull: false
      },
      type_room: {
        type: Sequelize.STRING,
        allowNull: false
      },
      id_services: {
        type: Sequelize.INTEGER
      },
      type_pay: {
        type: Sequelize.STRING,
        allowNull: false
      },
      total_pay: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM('CONFIRMADA', 'CANCELADA', 'PENDIENTE', 'CHECKED_IN', 'CHECKED_OUT'),
        defaultValue: 'PENDIENTE'
      },
      comments: {
        type: Sequelize.TEXT,
        allowNull: true
      }
    }, {
      timestamps: false
    });
  
    return Reservation;
  };
  