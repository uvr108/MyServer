'use strict';
module.exports = (sequelize, DataTypes) => {
  const SubItem = sequelize.define('SubItem', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    },
    monto: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: 'Monto Calculado',
        defaultValue: 0
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'SubItem',
  });
  SubItem.associate = function(models) {
    // associations can be defined here
    SubItem.hasMany(models.Solicitud, {
      foreignKey: 'subitemId',
    });
    SubItem.belongsTo(models.Item, {
      foreignKey: 'itemId',
    });
  };
  return SubItem;
};
