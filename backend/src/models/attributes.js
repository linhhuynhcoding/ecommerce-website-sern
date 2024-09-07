'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Attributes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Attributes.init(
        {
            attri_code: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            attri_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Attributes', // We need to choose the model name
        },
    );
    return Attributes;
};