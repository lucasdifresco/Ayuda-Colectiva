'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.roles, { as: 'roles', foreignKey: 'rol' })
      modelo.belongsTo(models.perfilOrganizaciones, { as: 'perfilOrganizaciones', foreignKey: 'id' })
      modelo.belongsTo(models.perfilAdministradores, { as: 'perfilAdministradores', foreignKey: 'id' })
      modelo.belongsTo(models.perfilDonantes, { as: 'perfilDonantes', foreignKey: 'id' })
    }
};
  modelo.init({
    email: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    rol: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    id: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, { sequelize, modelName: 'usuarios' });
  return modelo;
};