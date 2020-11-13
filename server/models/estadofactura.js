'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoFactura extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstadoFactura.hasMany(models.Factura, {
        foreignKey: 'estadofacturaId',
      });
    }
  };
  EstadoFactura.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoFactura',
    freezeTableName: true,
    tableName: 'EstadoFactura',
  });
  return EstadoFactura;
};