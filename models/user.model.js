module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define('user', {
      id_user: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_colab: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM('ADMIN', 'EMPLEADO'),
        defaultValue: 'EMPLEADO'
      },
      status: {
        type: Sequelize.ENUM('ACTIVO', 'INACTIVO'),
        defaultValue: 'ACTIVO'
      }
    }, {
      timestamps: false
    });
  
    return User;
  };
  