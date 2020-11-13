'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Solicitud', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      solicitante: {
        type: Sequelize.STRING
      },
      fecha: {
        type: Sequelize.DATE
      },
      numero_registro: {
        type: Sequelize.STRING
      },
      estadosolicitudId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'EstadoSolicitud',
          key: 'id',
          as: 'estadosolicitudId',
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
      subitemId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'SubItem',
          key: 'id',
          as: 'subitemId',
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
    await queryInterface.dropTable('Solicitud');
  }
};