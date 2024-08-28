'use strict';
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
        type: DataTypes.INTEGER,
        allowNull: false,
        f
      },
      des: {
        type: DataTypes.STRING,
      },
      shortDes: {
        type: DataTypes.STRING,
      },
      warranty: {
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
    },
  );
  return Product;
};