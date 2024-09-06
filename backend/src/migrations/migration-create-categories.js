'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('categories',
      {
        categoryID: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        categoryName: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        parentID: {
          type: Sequelize.STRING,
          allowNull: true,
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
     * await queryInterface.createTable('users', { id: Sequelize.INTERGER });
     */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
    */
    await queryInterface.dropTable('categories');
  }
};
