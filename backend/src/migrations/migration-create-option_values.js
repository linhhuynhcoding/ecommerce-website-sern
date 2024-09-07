'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('option_values',
      {
        optionCode: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        valueCode: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        valueName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updateAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('option_values');
  }
};
