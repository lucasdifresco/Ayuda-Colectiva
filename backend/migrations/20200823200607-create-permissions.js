'use strict';

const roles = require("../models/roles");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'roles',
          key: 'id'
        }
      },
      feature_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'features',
          key: 'id'
        }
      },
      can_create: {
        type: Sequelize.INTEGER
      },
      can_read: {
        type: Sequelize.INTEGER
      },
      can_update: {
        type: Sequelize.INTEGER
      },
      can_delete: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('permissions');
  }
};