'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('iniciativas', { 
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      titulo: {
        allowNull: false,
        type: Sequelize.STRING
      },
      descripcion: {
        allowNull: false,
        type: Sequelize.STRING
      },
      aprobacion: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      organizacion: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'organizaciones',
          key: 'id'
        }
      },
      evento: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'eventos',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('iniciativas');
  }
};
