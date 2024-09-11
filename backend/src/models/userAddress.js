'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserAddress extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserAddress.init(
    {
      userID: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
      },
      city_province: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      district: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ward_communce: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      addressDetail: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    },
    {
      // Other model options go here
      sequelize, // We need to pass the connection instance
      modelName: 'UserAddress', // We need to choose the model name
      timestamps: false,

    },
  );
  return UserAddress;
};