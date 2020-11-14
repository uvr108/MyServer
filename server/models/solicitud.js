'use strict';
module.exports = (sequelize, DataTypes) => {
  const Solicitud = sequelize.define('Solicitud', {
    solicitante: DataTypes.STRING,
    fecha: DataTypes.DATE,
    numero_registro: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Solicitud',
  });
  Solicitud.associate = function(models) {
    // associations can be defined here
    Solicitud.hasMany(models.OrdenCompra, {
      foreignKey: 'solicitudId',
    });
    Solicitud.belongsTo(models.SubItem, {
      foreignKey: 'subitemId',
      // onDelete: 'CASCADE'
    });
    Solicitud.belongsTo(models.CentroCosto, {
      foreignKey: 'centrocostoId',
      // onDelete: 'CASCADE'
    });
    Solicitud.belongsTo(models.EstadoSolicitud, {
      foreignKey: 'estadosolicitudId',
      // onDelete: 'CASCADE'
    });
  };
  return Solicitud;
};