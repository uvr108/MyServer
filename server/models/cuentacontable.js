'use strict';
module.exports = (sequelize, DataTypes) => {
  const CuentaContable = sequelize.define('CuentaContable', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'CuentaContable',
  });
  CuentaContable.associate = function(models) {
    // associations can be defined here
    CuentaContable.hasMany(models.ComprobanteContable, {
      foreignKey: 'cuentacontableId',
    });
  };
  return CuentaContable;
};