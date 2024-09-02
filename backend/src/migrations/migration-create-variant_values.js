'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('variant_values',
      {
        sku: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true
        },
        variantCode: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        optionCode: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        valueCode: {
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
  }
};
