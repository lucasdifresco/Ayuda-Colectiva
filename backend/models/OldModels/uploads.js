/*
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class uploads extends Model {

    static associate(models) {
      // define association here
      uploads.belongsTo(models.users, {
        as: 'uploaders',
        foreignKey: 'uploader_id'
      });
      uploads.belongsTo(models.patients, {
        as: 'patients',
        foreignKey: 'patient_id'
      });
    }
  };
  uploads.init({
    uploader_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    patient_id: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    title: {
      allowNull: false,
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'uploads',
  });
  return uploads;
};
*/