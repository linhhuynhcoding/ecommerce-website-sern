'use strict';
import db from "../models";

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Order.hasOne(models.User, {
                foreignKey: 'userID',
                sourceKey: 'userID',
            });
            Order.hasOne(models.Cart, {
                foreignKey: 'userID',
                sourceKey: 'userID',
                as: "cart",
            });
            Order.hasMany(models.OrderItem, {
                foreignKey: 'OrderID',
                sourceKey: 'OrderID',
                as: "items"
            });

        }
    }
    Order.init(
        {
            OrderID: {
                type: DataTypes.UUIDV4,
                allowNull: false,
                primaryKey: true
            },
            userID: {
                type: DataTypes.STRING,
                allowNull: false,
                primaryKey: true
            },
            shipfee: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            notes: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: DataTypes.ENUM(['Approved', 'Paying', 'Shipping', 'Done']),
                allowNull: false,
            },
            approved_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            paid_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            shipped_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            // Other model options go here
            sequelize, // We need to pass the connection instance
            modelName: 'Order', // We need to choose the model name
            timestamps: false,

        },
    );
    // Cart.hasOne(Brands, {
    //   foreignKey: 'brandCode',
    // });
    return Order;
};