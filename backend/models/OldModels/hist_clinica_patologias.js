/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hist_clinica_patologias extends Model {

    static associate(models) {
      // define association here
      hist_clinica_patologias.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      }),
      hist_clinica_patologias.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      })
    }
  };
  hist_clinica_patologias.init({
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    type: {
      allowNull: false,
      type: DataTypes.STRING
    },
    comments: {
      allowNull: false,
      type: DataTypes.TEXT
    }
  }, {
    sequelize,
    modelName: 'hist_clinica_patologias',
  });
  return hist_clinica_patologias;
};
*/