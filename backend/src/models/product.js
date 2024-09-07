'use strict';
import db from "../models";

const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Product.hasOne(models.Brands, {
        foreignKey : 'brandCode',
        sourceKey : 'brandCode',
        as: "brands",
      });
      Product.hasOne(models.Categories, {
        foreignKey : 'categoryID',
        sourceKey : 'categoryID',
        as: "categories",
      });
      Product.hasMany(models.Product_Images, {
        foreignKey : 'sku',
        as: "images",
      });
    }
  }
  Product.init(
    {
      sku: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryID: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      des: {
        type: DataTypes.BLOB,
      },
      shortDes: {
        type: DataTypes.STRING,
      },
      warranty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      brandCode: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Product', // We need to choose the model name
      timestamps: false,

    },
  );
  // Product.hasOne(Brands, {
  //   foreignKey: 'brandCode',
  // });
  return Product;
};