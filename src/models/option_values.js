
'use strict';
const {
      Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
      class OptionValues extends Model {
            /**
             * Helper method for defining associations.
             * This method is not a part of Sequelize lifecycle.
             * The `models/index` file will call this method automatically.
             */
            static associate(models) {
                  // define association here
            }
      }
      OptionValues.init(
            {
                  optionCode: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        primaryKey: true
                  },
                  valueCode: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        primaryKey: true
                  },
                  valueName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                  },
            },
            {
                  // Other model optionvalues go here
                  sequelize, // We need to pass the connection instance
                  modelName: 'OptionValues', // We need to choose the model name
            },
      );
      return OptionValues;
};
