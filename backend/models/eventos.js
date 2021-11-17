'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.hasMany(models.iniciativas, { as: 'iniciativas', foreignKey: 'evento' })
     }};
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
    }
  }, { sequelize, modelName: 'eventos'});
  return modelo;
};