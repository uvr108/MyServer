'use strict';
module.exports = (sequelize, DataTypes) => {
  const ComprobanteContable = sequelize.define('ComprobanteContable', {

    numero_registro: DataTypes.STRING, 
    fecha_ingreso: DataTypes.DATE

  }, {
    freezeTableName: true,
    tableName: 'ComprobanteContable',
  });
  ComprobanteContable.associate = function(models) {
    // associations can be defined here
    ComprobanteContable.belongsTo(models.Factura, {
      foreignKey: 'facturaId',
      // onDelete: 'CASCADE'
    });
    ComprobanteContable.belongsTo(models.CuentaContable, {
      foreignKey: 'cuentacontableId',
      // onDelete: 'CASCADE'
    });
  };
  return ComprobanteContable;
};