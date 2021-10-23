'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) { }
 };
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
    }
  }, { sequelize, modelName: 'perfilOrganizaciones' });
  return modelo;
};