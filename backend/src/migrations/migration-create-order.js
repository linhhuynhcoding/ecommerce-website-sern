'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order',
      {
        OrderID: {
          type: Sequelize.UUID,
          allowNull: false,
          primaryKey: true
        },
        userID: {
          type: Sequelize.STRING,
          allowNull: false,
          primaryKey: true
        },
        shipfee: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        amount: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        notes: {
          type: Sequelize.TEXT,
          allowNull: true,
        },
        status: {
          type: Sequelize.ENUM(['Approved', 'Paying', 'Shipping', 'Done']),
          allowNull: false,
        },
        approved_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        paid_at: {
          type: Sequelize.DATE,
          allowNull: true,
        },
        shipped_at: {
          type: Sequelize.DATE,
          allowNull: true,
        }
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
    await queryInterface.dropTable('order');
  }
};
