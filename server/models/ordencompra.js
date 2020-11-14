'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrdenCompra = sequelize.define('OrdenCompra', {
    fecha_emision: DataTypes.DATE,
    numero_oc: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'OrdenCompra',
  });
  OrdenCompra.associate = function(models) {
    // associations can be defined here
    OrdenCompra.hasMany(models.Factura, {
      foreignKey: 'ordencompraId',
    });
    OrdenCompra.belongsTo(models.Solicitud, {
      foreignKey: 'solicitudId',
      // onDelete: 'CASCADE'
    });
    OrdenCompra.belongsTo(models.EstadoOrden, {
      foreignKey: 'estadoordenId',
      // onDelete: 'CASCADE'
    });
    OrdenCompra.belongsTo(models.CentroCosto, {
      foreignKey: 'centrocostoId',
      // onDelete: 'CASCADE'
    });
  };
  return OrdenCompra;
};
