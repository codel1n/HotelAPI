module.exports = (sequelize, Sequelize) => {
  const Facturacion = sequelize.define('facturacion', {
    id_pay: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    id_reserv: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    id_huesped: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    no_nit: {
      type: Sequelize.STRING,
      allowNull: true
    },
    type_pay: {
      type: Sequelize.STRING,
      allowNull: false
    },
    total_pay: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false
    },
    status_pay: {
      type: Sequelize.ENUM('PENDIENTE', 'COMPLETADO', 'CANCELADO'),
      defaultValue: 'PENDIENTE'
    },
    invoice_number: {
      type: Sequelize.STRING,
      allowNull: true
    },
    issue_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    }
  }, {
    timestamps: false,
    hooks: {
      afterCreate: async (facturacion, options) => {
        // Generación automática del invoice_number
        let prefix;
        const currentYear = new Date().getFullYear();
        
        switch (facturacion.status_pay) {
          case 'COMPLETADO':
            prefix = 'FAC-COM';
            break;
          case 'PENDIENTE':
            prefix = 'FAC-PEN';
            break;
          case 'CANCELADO':
            prefix = 'FAC-CAN';
            break;
        }

        // Generar el número de factura: FAC-<status>-<year>-<id>
        const invoiceNumber = `${prefix}-${currentYear}-${facturacion.id_pay.toString().padStart(3, '0')}`;

        // Actualizamos el registro con el invoice_number generado
        await facturacion.update({ invoice_number: invoiceNumber });
      }
    }
  });

  return Facturacion;
};

