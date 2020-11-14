'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstadoSolicitud = sequelize.define('EstadoSolicitud', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'EstadoSolicitud',
  });
  EstadoSolicitud.associate = function(models) {
    // associations can be defined here
    EstadoSolicitud.hasMany(models.Solicitud, {
      foreignKey: 'estadosolicitudId',
    });
  };
  return EstadoSolicitud;
};