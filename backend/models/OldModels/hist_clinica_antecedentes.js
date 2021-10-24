/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hist_clinica_antecedentes extends Model {

    static associate(models) {
      // define association here
      hist_clinica_antecedentes.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      }),
      hist_clinica_antecedentes.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      })
    }
  };
  hist_clinica_antecedentes.init({
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: DataTypes.STRING,
    is_patient: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    is_father: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    is_mother: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    },
    is_siblings: {
      allowNull: false,
      defaultValue: 0,
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'hist_clinica_antecedentes',
  });
  return hist_clinica_antecedentes;
};
*/