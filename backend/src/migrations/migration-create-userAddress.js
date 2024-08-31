'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('useraddress',
      {
        userID: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true

        },
        city_province: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        district: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        ward_communce: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        addressDetail: {
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
