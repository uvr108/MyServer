'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('ComprobanteContable', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_ingreso: {
        type: Sequelize.DATE
      },
      numero_registro: {
        type: Sequelize.STRING
      },
      facturaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Factura',
          key: 'id',
          as: 'facturaId',
        }
      },
      cuentacontableId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CuentaContable',
          key: 'id',
          as: 'cuentacontableId',
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('ComprobanteContable');
  }
};