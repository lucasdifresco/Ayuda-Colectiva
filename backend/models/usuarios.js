'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.organizaciones, { as: 'organizaciones', foreignKey: 'id' })
      modelo.belongsTo(models.administradores, { as: 'administradores', foreignKey: 'id' })
      modelo.belongsTo(models.donantes, { as: 'donantes', foreignKey: 'id' })
    }
};
  modelo.init({
    email: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rol: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'usuarios', timestamps: false });
  return modelo;
};