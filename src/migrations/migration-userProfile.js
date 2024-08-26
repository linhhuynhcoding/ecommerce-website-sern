'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    // name: DataTypes.STRING,
    //         dob: DataTypes.Date,
    //         gender: DataTypes.ENUM(['Nam', 'Nữ', 'Khác']),
    //         phone: DataTypes.STRING,
    //         email: DataTypes.STRING,
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('UserProfile', {
            name: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            dob: {
                allowNull: false,
                type: Sequelize.DATE
            },
            gender: {
                allowNull: false,
                type: Sequelize.ENUM(['Nam', 'Nữ', 'Khác'])
            },
            phone: {
                allowNull: false,
                type: Sequelize.STRING
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('UserProfile');
    }
};