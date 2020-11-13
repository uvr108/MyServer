'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Factura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Factura.hasMany(models.ComponenteContable, {
        foreignKey: 'facturaId',
      });
      Factura.belongsTo(models.OrdenCompra, {
        foreignKey: 'ordencompraId',
      });
      Factura.belongsTo(models.EstadoFactura, {
        foreignKey: 'estadofacturaId',
      });
    }
  };
  Factura.init({
    numero_registro: DataTypes.STRING,
    numero_cuotas: DataTypes.INTEGER,
    monto: DataTypes.INTEGER,
    fecha_recepcion: DataTypes.DATE,
    observacion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Factura',
    freezeTableName: true,
    tableName: 'Factura',
  });
  return Factura;
};