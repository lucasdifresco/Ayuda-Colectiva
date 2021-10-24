/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hist_clinica_info extends Model {

    static associate(models) {
      // define association here
      hist_clinica_info.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      }),
      hist_clinica_info.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      })
    }
  };
  hist_clinica_info.init({
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    },
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    exercise_frequency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    drinking_frequency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    smoking_frequency: {
      allowNull: false,
      type: DataTypes.STRING
    },
    pregnancies: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    diet: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'hist_clinica_info',
  });
  return hist_clinica_info;
};
*/