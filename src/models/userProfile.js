'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class UserProfile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserProfile.init(
    {
        name: DataTypes.STRING,
        dob: DataTypes.Date,
        gender: DataTypes.ENUM(['Nam', 'Nữ', 'Khác']),
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'UserProfile', // We need to choose the model name
    },
);
return UserProfile;
};