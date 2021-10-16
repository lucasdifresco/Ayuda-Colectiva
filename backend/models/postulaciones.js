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
    fecha: {
      allowNull: false,
      type: DataTypes.DATE
    },
    donante: {
      foreignKey: 'perfilDonantes',
      allowNull: false,
      type: DataTypes.INTEGER
    },
    iniciativa: {
      foreignKey: 'iniciativas',
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'postulaciones' });
  return modelo;
};