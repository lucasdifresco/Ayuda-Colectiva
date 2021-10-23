/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class availability extends Model {

    static associate(models) {
      availability.belongsTo(models.users, {
        as: 'doctors',
        foreignKey: 'doctor_id'
      });
      availability.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      });
    }
  };
  availability.init({
    doctor_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    patient_id: {
      allowNull: true,
      defaultValue: null,
      type: DataTypes.INTEGER
    },
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    weekday: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    time: {
      allowNull: false,
      type: DataTypes.STRING
    },
  }, {
    sequelize,
    modelName: 'availability',
  });
  return availability;
};
*/