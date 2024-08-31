
'use strict';
const {
      Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
      class Options extends Model {
            /**
             * Helper method for defining associations.
             * This method is not a part of Sequelize lifecycle.
             * The `models/index` file will call this method automatically.
             */
            static associate(models) {
                  // define association here
            }
      }
      Options.init(
            {
                  optionCode: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        primaryKey: true
                  },
                  optionName: {
                        type: DataTypes.STRING,
                        allowNull: false,
                  },
            },
            {
                  // Other model options go here
                  sequelize, // We need to pass the connection instance
                  modelName: 'Options', // We need to choose the model name
            },
      );
      return Options;
};
