'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Attribute_Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Attribute_Products.hasOne(models.Attributes, {
                foreignKey: 'attri_code',
                sourceKey: 'attri_code',
                as: "attri_name",
            });
        }
    }
    Attribute_Products.init(
        {
            sku: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            attri_code: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            attri_value: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Attribute_Products', // We need to choose the model name
            timestamps: false,

        },
    );
    return Attribute_Products;
};