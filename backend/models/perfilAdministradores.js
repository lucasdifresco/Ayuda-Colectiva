'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class modelo extends Model { };
  modelo.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    nombre: {
      allowNull: false,
      type: DataTypes.STRING
    },
    apellido: {
      allowNull: false,
      type: DataTypes.STRING
    },
    usuario: {
      foreignKey: 'roles',
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, { sequelize, modelName: 'perfilAdministradores' });
  return modelo;
};