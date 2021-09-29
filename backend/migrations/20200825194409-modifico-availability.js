'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.removeColumn('availabilities', 'timeTo');
    await queryInterface.renameColumn('availabilities', 'timeFrom', 'time');
    await queryInterface.removeColumn('availabilities', 'frequency');
    await queryInterface.addColumn(
      'availabilities',
      'patient_id', {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
        after: 'doctor_id',
        references: {
          model: 'users',
          key: 'id'
        }
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
