'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
class modelo extends Model { static associate(models) { } };
  modelo.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    tipo: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, { sequelize, modelName: 'roles', timestamps: false });
  return modelo;
};