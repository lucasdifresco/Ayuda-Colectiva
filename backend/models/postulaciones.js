'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.perfilDonantes, { as: 'perfilDonantes', foreignKey: 'donante' })
      modelo.belongsTo(models.iniciativas, { as: 'iniciativas', foreignKey: 'iniciativa' })
    }
  };
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
      allowNull: false,
      type: DataTypes.INTEGER
    },
    iniciativa: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'postulaciones' });
  return modelo;
};