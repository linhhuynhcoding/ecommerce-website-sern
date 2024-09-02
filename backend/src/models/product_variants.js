
'use strict';
const {
      Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
      class ProductVariants extends Model {
            /**
             * Helper method for defining associations.
             * This method is not a part of Sequelize lifecycle.
             * The `models/index` file will call this method automatically.
             */
            static associate(models) {
                  // define association here
            }
      }
      ProductVariants.init(
            {
                  sku: {
                        type: DataTypes.INTEGER,
                        allowNull: false,
                        primaryKey: true
                  },
                  variantCode: {
                        type: DataTypes.STRING,
                        allowNull: false,
                        primaryKey: true
                  },
            },
            {
                  // Other model productvariants go here
                  sequelize, // We need to pass the connection instance
                  modelName: 'ProductVariants', // We need to choose the model name
            },
      );
      return ProductVariants;
};

