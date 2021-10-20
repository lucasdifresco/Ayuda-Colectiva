'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.roles, { as: 'roles', foreignKey: 'rol' })
    }
};
  modelo.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
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
  }, { sequelize, modelName: 'usuarios' });
  return modelo;
};