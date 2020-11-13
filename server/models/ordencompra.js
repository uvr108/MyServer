'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrdenCompra extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrdenCompra.hasMany(models.Factura, {
        foreignKey: 'ordencompraId',
      });
      OrdenCompra.belongsTo(models.Solicitud, {
        foreignKey: 'solicitudId',
      });
      OrdenCompra.belongsTo(models.EstadoOrden, {
        foreignKey: 'estadoordenId',
      });
      OrdenCompra.belongsTo(models.CentroCosto, {
        foreignKey: 'centrocostoId',
      });
    }
  };
  OrdenCompra.init({
    fecha_emision: DataTypes.DATE,
    numero_oc: DataTypes.STRING,
    observaciones: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'OrdenCompra',
    freezeTableName: true,
    tableName: 'OrdenCompra',
  });
  return OrdenCompra;
};