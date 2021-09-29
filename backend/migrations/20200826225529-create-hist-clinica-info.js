'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('hist_clinica_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      patient_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        },
        unique: true
      },
      doctor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      exercise_frequency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      drinking_frequency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      smoking_frequency: {
        allowNull: false,
        type: Sequelize.STRING
      },
      pregnancies: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      diet: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('hist_clinica_infos');
  }
};