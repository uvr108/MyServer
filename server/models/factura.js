'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    numero_registro: DataTypes.STRING,
    numero_cuotas: DataTypes.INTEGER,
    monto: DataTypes.INTEGER,
    fecha_recepcion: DataTypes.DATE,
    observacion: DataTypes.STRING
  }, {
    freezeTableName: true,
    tableName: 'Factura',
  });
  Factura.associate = function(models) {
    // associations can be defined here
    Factura.hasMany(models.ComprobanteContable, {
      foreignKey: 'facturaId',
    });
    Factura.belongsTo(models.OrdenCompra, {
      foreignKey: 'ordencompraId',
    });
    Factura.belongsTo(models.EstadoFactura, {
      foreignKey: 'estadofacturaId',
    });
  };
  return Factura;
};