'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return Promise.all([
        queryInterface.changeColumn('usuarios', 'id', {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          allowNull: false,
          unique: true
        }, {})
    ])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
