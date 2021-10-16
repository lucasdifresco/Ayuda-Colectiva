'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.usuarios, { as: 'usuarios', foreignKey: 'usuario' })
    }
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
    apellido: {
      allowNull: false,
      type: DataTypes.STRING
    },
    validacion: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    usuario: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
  }, { sequelize, modelName: 'perfilDonantes' });
  return modelo;
};