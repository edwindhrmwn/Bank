'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Accounts', 'balance', {
      type: 'FLOAT USING CAST("balance" AS FLOAT)'
    })
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.changeColumn('Accounts', 'balance', {
      type: 'INTEGER USING CAST("balance" AS INTEGER)'
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
