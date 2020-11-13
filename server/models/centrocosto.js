'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CentroCosto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      CentroCosto.hasMany(models.Solicitud, {
        foreignKey: 'centrocostoId',
      });
      CentroCosto.hasMany(models.OrdenCompra, {
        foreignKey: 'centrocostoId',
      });
    }
  };
  CentroCosto.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CentroCosto',
    freezeTableName: true,
    tableName: 'CentroCosto',
  });
  return CentroCosto;
};