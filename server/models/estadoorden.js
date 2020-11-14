'use strict';
module.exports = (sequelize, DataTypes) => {
  const EstadoOrden = sequelize.define('EstadoOrden', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'EstadoOrden',
  });
  EstadoOrden.associate = function(models) {
    // associations can be defined here
    EstadoOrden.hasMany(models.OrdenCompra, {
      foreignKey: 'estadoordenId',
    });
  };
  return EstadoOrden;
};