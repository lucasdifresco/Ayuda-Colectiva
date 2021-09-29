'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('availabilities', 'dateTo');
    await queryInterface.renameColumn('availabilities', 'dateFrom', 'date');
    await queryInterface.addColumn(
      'availabilities',
      'weekday', {
        allowNull: false,
        type: Sequelize.INTEGER,
        after: 'date'
      }
    )
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
