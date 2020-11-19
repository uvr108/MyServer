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
      numero_registro: {
        type: Sequelize.STRING
      },
      fecha_ingreso: {
        type: Sequelize.DATE
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