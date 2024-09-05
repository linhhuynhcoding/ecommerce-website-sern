'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products',
      {

        sku: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true

        },
        productName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        productPrice: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        categoryID: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        des: {
          type: Sequelize.BLOB,
        },
        shortDes: {
          type: Sequelize.STRING,
        },
        warranty: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        quantity: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        brandCode: {
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
