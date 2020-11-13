'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CuentaContable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CuentaContable.hasMany(models.ComprobanteContable, {
        foreignKey: 'cuentacontableId',
      });
    }
  };
  CuentaContable.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CuentaContable',
    freezeTableName: true,
    tableName: 'CuentaContable',
  });
  return CuentaContable;
};