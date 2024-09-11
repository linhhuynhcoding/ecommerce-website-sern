'use strict';
import db from "../models";

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cart extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Cart.hasOne(models.User, {
                foreignKey: 'userID',
                sourceKey: 'userID',
            });
            Cart.hasOne(models.Product, {
                foreignKey: 'sku',
                sourceKey: 'sku',
                as: "info"
            });
            Cart.hasMany(models.Product_Images, {
                foreignKey: 'sku',
                sourceKey: 'sku',
                as: "images",
            });

        }
    }
    Cart.init(
        {
            userID: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            sku: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Cart', // We need to choose the model name
            timestamps: false,

        },
    );
    // Cart.hasOne(Brands, {
    //   foreignKey: 'brandCode',
    // });
    return Cart;
};