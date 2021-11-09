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
    paginaWeb: {
      allowNull: true,
      type: DataTypes.STRING
    },
    direccion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    provincia: {
      allowNull: false,
      type: DataTypes.STRING
    },
    telefono: {
      allowNull: true,
      type: DataTypes.STRING
    },
    nroPersoneriaJuridica: {
      allowNull: true,
      type: DataTypes.STRING
    },
    organismoPersoneriaJuridica: {
      allowNull: true,
      type: DataTypes.STRING
    },
    fechaOtorgamientoPersoneriaJuridica: {
      allowNull: true,
      type: DataTypes.STRING
    },
    CUIT: {
      allowNull: true,
      type: DataTypes.STRING
    },
  }, { sequelize, modelName: 'organizaciones', timestamps: false });
  return modelo;
};