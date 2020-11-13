'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Factura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numero_registro: {
        type: Sequelize.STRING
      },
      numero_cuotas: {
        type: Sequelize.INTEGER
      },
      monto: {
        type: Sequelize.INTEGER
      },
      fecha_recepcion: {
        type: Sequelize.DATE
      },
      observacion: {
        type: Sequelize.STRING
      },
      ordencompraId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'OrdenCompra',
          key: 'id',
          as: 'ordencompraId',
        }
      },
      estadofacturaId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'EstadoFactura',
          key: 'id',
          as: 'estadofacturaId',
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
    await queryInterface.dropTable('Factura');
  }
};