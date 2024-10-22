'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Categories.init(
    {
      categoryID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      categoryName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      parentID: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'Categories', // We need to choose the model name
      timestamps: false
    },
  );
  return Categories;
};