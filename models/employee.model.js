module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define('employee', {
      id_colab: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lastname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      birthdate: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      no_dpi: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefono: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      role: {
        type: Sequelize.STRING,
        allowNull: false
      },
      salary: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: true
      },
      hire_date: {
        type: Sequelize.DATEONLY,
        allowNull: true
      },
      contract_type: {
        type: Sequelize.ENUM('TEMPORAL', 'PERMANENTE', 'FREELANCE'),
        defaultValue: 'PERMANENTE'
      },
      supervisor_id: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('ACTIVO', 'INACTIVO', 'SUSPENDIDO'),
        defaultValue: 'ACTIVO'
      }
    }, {
      timestamps: false
    });
  
    return Employee;
  };
  