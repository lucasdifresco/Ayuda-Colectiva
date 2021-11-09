'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('organizaciones', 'paginaWeb', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'direccion', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'provincia', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'telefono', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'nroPersoneriaJuridica', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'organismoPersoneriaJuridica', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'fechaOtorgamientoPersoneriaJuridica', 
          { type: Sequelize.DATE },
          { transaction: t }
        ),
        queryInterface.addColumn('organizaciones', 'CUIT', 
          { type: Sequelize.STRING },
          { transaction: t }
        ),
        queryInterface.removeColumn('organizaciones', 'createdAt'),
        queryInterface.removeColumn('organizaciones', 'updatedAt')
      ]);
    });
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
