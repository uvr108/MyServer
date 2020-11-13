'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ComprobanteContable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ComponenteContable.belongsTo(models.Factura, {
        foreignKey: 'facturaId',
      });
      ComponenteContable.belongsTo(models.CuentaContable, {
        foreignKey: 'cuentacontableId',
      });
    }
  };
  ComprobanteContable.init({
    fecha_ingreso: DataTypes.DATE,
    numero_registro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ComprobanteContable',
    freezeTableName: true,
    tableName: 'ComprobanteContable',
  });
  return ComprobanteContable;
};