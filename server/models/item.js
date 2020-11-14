'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } ,
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
    tableName: 'Item',
  });
  Item.associate = function(models) {
    // associations can be defined here
    Item.hasMany(models.SubItem, {
      foreignKey: 'itemId',
    });
    Item.belongsTo(models.Presupuesto, {
      foreignKey: 'presupuestoId',
      // onDelete: 'CASCADE'
    });
  };
  return Item;
};
