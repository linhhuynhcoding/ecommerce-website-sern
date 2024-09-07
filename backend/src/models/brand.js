'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Brands extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Brands.hasOne(models.Product, {
      //   foreignKey: 'brandCode',
      // });
      // Brands.hasOne(models.Product);

    }
  }
  Brands.init(
    {
      brandCode: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      brandName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brandLogo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Brands', // We need to choose the model name
      timestamps: false,
    },
  );
  return Brands;
};