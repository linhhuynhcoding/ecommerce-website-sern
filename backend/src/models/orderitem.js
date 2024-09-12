'use strict';
import db from "../models";

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class OrderItem extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // OrderItem.belongsToMany(models.Order, {
            //     foreignKey: 'OrderID',
            //     sourceKey: 'OrderID',
            // });
            
            OrderItem.hasOne(models.Product, {
                foreignKey: 'sku',
                sourceKey: 'sku',
                as: "products"
            });

        }
    }
    OrderItem.init(
        {
            OrderID: {
                type: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },  
            sku: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            quantity: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'OrderItem', // We need to choose the model name
            timestamps: false,

        },
    );
    // Cart.hasOne(Brands, {
    //   foreignKey: 'brandCode',
    // });
    return OrderItem;
};