'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('attribute_products',
      {
        sku: {
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        attri_code: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
          },
          attri_value: {
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
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
    await queryInterface.dropTable('attribute_products');
  }
};
