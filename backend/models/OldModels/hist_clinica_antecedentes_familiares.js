/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hist_clinica_antecedentes_familiares extends Model {

    static associate(models) {
      // define association here
      hist_clinica_antecedentes_familiares.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      }),
      hist_clinica_antecedentes_familiares.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      })
    }
  };
  hist_clinica_antecedentes_familiares.init({
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    comments: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'hist_clinica_antecedentes_familiares',
  });
  return hist_clinica_antecedentes_familiares;
};
*/