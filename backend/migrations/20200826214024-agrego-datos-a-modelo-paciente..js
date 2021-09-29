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
      'patients',
      'nombre', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'dni'
      }
    );
    await queryInterface.addColumn(
      'patients',
      'apellido', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'nombre'
      }
    );
    await queryInterface.addColumn(
      'patients',
      'fecha_nacimiento', {
        allowNull: true,
        type: Sequelize.DATEONLY,
        after: 'apellido'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'sexo', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'fecha_nacimiento'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'ocupacion', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'sexo'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'estado_civil', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'ocupacion'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'nacionalidad', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'estado_civil'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'direccion', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'nacionalidad'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'telefono', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'direccion'
      }
    ),
    await queryInterface.addColumn(
      'patients',
      'nivel_educativo', {
        allowNull: true,
        type: Sequelize.STRING,
        after: 'telefono'
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
