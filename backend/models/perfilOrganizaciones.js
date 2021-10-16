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
    mision: {
      allowNull: false,
      type: DataTypes.STRING
    },
    aprobacion: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    fechaDeAlta: {
      allowNull: false,
      type: DataTypes.DATE
    },
    usuario: {
      foreignKey: 'roles',
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, { sequelize, modelName: 'perfilOrganizaciones' });
  return modelo;
};