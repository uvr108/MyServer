'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
          // associations can be defined here
    Item.hasMany(models.SubItem, {
      foreignKey: 'itemId',
    });
    Item.belongsTo(models.Presupuesto, {
      foreignKey: 'presupuestoId',
    });
      // define association here
    }
  };
  Item.init({
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
    modelName: 'Item',
    freezeTableName: true,
    tableName: 'Item',
  });
  return Item;
};