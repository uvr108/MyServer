'use strict';
module.exports = (sequelize, DataTypes) => {
  const Presupuesto = sequelize.define('Presupuesto', {
    nombre:{
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Please enter your name'
      }
    } ,
    monto: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: true,
        msg: 'Monto Calculado',
        defaultValue: 0
      }
    }
  }, {
    freezeTableName: true,
    tableName: 'Presupuesto',
  });
  Presupuesto.associate = function(models) {
    // associations can be defined here
    Presupuesto.hasMany(models.Item, {
      foreignKey: 'presupuestoId',
    });
  };
  
  return Presupuesto;

};