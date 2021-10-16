'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.perfilOrganizaciones, { as: 'perfilOrganizaciones', foreignKey: 'organizacion' })
      modelo.belongsTo(models.eventos, { as: 'eventos', foreignKey: 'evento' })
    }
  };
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
      allowNull: false,
      type: DataTypes.INTEGER
    },
    evento: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'iniciativas' });
  return modelo;
};