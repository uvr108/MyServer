'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Presupuesto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Presupuesto.hasMany(models.Item, {
        foreignKey: 'presupuestoId',
      });
    }
  };
  Presupuesto.init({
    nombre: {
      type: DataTypes.STRING,
      allowNull: { args: false }
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: true,
        defaultValue: 0
      }
    }
  }, {
    sequelize,
    modelName: 'Presupuesto',
    freezeTableName: true,
    tableName: 'Presupuesto',
  });
  return Presupuesto;
};