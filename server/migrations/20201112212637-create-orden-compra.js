'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('OrdenCompra', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fecha_emision: {
        type: Sequelize.DATE
      },
      numero_oc: {
        type: Sequelize.STRING
      },
      observaciones: {
        type: Sequelize.STRING
      },
      estadoordenId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'EstadoOrden',
          key: 'id',
          as: 'estadoordenId',
        }
      },
      centrocostoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'CentroCosto',
          key: 'id',
          as: 'centrocostoId',
        }
      },
      solicitudId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Solicitud',
          key: 'id',
          as: 'solicitudId',
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
    await queryInterface.dropTable('OrdenCompra');
  }
};