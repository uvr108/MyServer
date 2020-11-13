'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class SubItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      SubItem.hasMany(models.Solicitud, {
        foreignKey: 'subitemId',
      });
      SubItem.belongsTo(models.Item, {
        foreignKey: 'itemId',
      });
    }
  };
  SubItem.init({
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
    modelName: 'SubItem',
    freezeTableName: true,
    tableName: 'SubItem',
  });
  return SubItem;
};
