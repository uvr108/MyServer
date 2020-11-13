'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoOrden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstadoOrden.hasMany(models.OrdenCompra, {
        foreignKey: 'estadoordenId',
      });
    }
  };
  EstadoOrden.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoOrden',
    freezeTableName: true,
    tableName: 'EstadoOrden',
  });
  return EstadoOrden;
};