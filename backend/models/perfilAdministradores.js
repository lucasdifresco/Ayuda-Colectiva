'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) { }
};
  modelo.init({
    id: {
      autoIncrement: true,
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
    }
  }, { sequelize, modelName: 'perfilAdministradores' });
  return modelo;
};