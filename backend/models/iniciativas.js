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
    titulo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    aprobacion: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    organizacion: {
      foreignKey: 'perfilOrganizaciones',
      allowNull: false,
      type: DataTypes.INTEGER
    },
    evento: {
      foreignKey: 'eventos',
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'iniciativas' });
  return modelo;
};