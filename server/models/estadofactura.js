'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstadoFactura = sequelize.define('EstadoFactura', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'EstadoFactura',
  });
  EstadoFactura.associate = function(models) {
    // associations can be defined here
    EstadoFactura.hasMany(models.Factura, {
      foreignKey: 'estadofacturaId',
    });
  };
  return EstadoFactura;
};