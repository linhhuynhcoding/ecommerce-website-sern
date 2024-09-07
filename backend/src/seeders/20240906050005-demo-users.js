'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('users', [{
      userID: 'admin',
      username: 'admin',
      password: 123,
      name: "Huỳnh Vũ Nhật Linh",
      dob: new Date(),
      gender: 'Nam',
      phone: '0966126449',
      email: 'a@a',
      role: 'Admin',
      createAt: new Date(),
      updateAt: new Date(),
    }], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
    */
    await queryInterface.bulkDelete('users', null, {});
  }
};
