'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class modelo extends Model { };
  modelo.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    estado: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    region: {
      allowNull: false,
      type: DataTypes.STRING
    },
    imagen: {
      allowNull: true,
      type: DataTypes.STRING
    }
  }, { sequelize, modelName: 'eventos', timestamps: false});
  return modelo;
};