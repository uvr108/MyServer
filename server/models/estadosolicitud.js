'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EstadoSolicitud extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      EstadoSolicitud.hasMany(models.Solicitud, {
        foreignKey: 'estadosolicitudId',
      });
    }
  };
  EstadoSolicitud.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EstadoSolicitud',
    freezeTableName: true,
    tableName: 'EstadoSolicitud',
  });
  return EstadoSolicitud;
};