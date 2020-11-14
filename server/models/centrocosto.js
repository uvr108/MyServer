'use strict';
module.exports = (sequelize, DataTypes) => {
  const CentroCosto = sequelize.define('CentroCosto', {
    
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'CentroCosto',
  });
  CentroCosto.associate = function(models) {
    // associations can be defined here
    CentroCosto.hasMany(models.Solicitud, {
      foreignKey: 'centrocostoId',
    });
    CentroCosto.hasMany(models.OrdenCompra, {
      foreignKey: 'centrocostoId',
    });
  };
  return CentroCosto;
};