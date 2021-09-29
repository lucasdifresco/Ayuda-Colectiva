'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addColumn(
      'users',
      'nombre', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'email'
      }
    );
    await queryInterface.addColumn(
      'users',
      'apellido', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'nombre'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeColumn('users', 'nombre');
    await queryInterface.removeColumn('users', 'apellido');
  }
};
