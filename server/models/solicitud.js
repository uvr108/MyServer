'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Solicitud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Solicitud.hasMany(models.OrdenCompra, {
        foreignKey: 'solicitudId',
      });
      Solicitud.belongsTo(models.SubItem, {
        foreignKey: 'subitemId',
      });
      Solicitud.belongsTo(models.CentroCosto, {
        foreignKey: 'centrocostoId',
      });
      Solicitud.belongsTo(models.EstadoSolicitud, {
        foreignKey: 'estadosolicitudId',
      });
    }
  };
  Solicitud.init({
    solicitante: DataTypes.STRING,
    fecha: DataTypes.DATE,
    numero_registro: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Solicitud',
    freezeTableName: true,
    tableName: 'Solicitud', 
  });
  return Solicitud;
};