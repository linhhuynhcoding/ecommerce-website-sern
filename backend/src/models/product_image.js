'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProductImage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ProductImage.init(
    {
      sku: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      imageID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'ProductImage', // We need to choose the model name
    },
  );
  return ProductImage;
};