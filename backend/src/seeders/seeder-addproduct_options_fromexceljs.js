'use strict';
const { getProduct_Options } = require('../utils/ExcelUtil.js');
// import {getProducts, init} from './../utils/ExcelUtil.js';

// export async function up(queryInterface, Sequelize) {
//   await queryInterface.bulkInsert('products', [
//     products.map((data, index) => {
//       return {
//         sku: data[sku],
//         productName: data[productName],
//         productPrice: data[productPrice],
//         categoryID: data[categoryID],
//         des: data[des],
//         shortDes: data[shortDes],
//         warranty: data[warranty],
//         brandCode: data[brandCode],
//         createAt: new Date,
//         updateAt: new Date,
//       }
//     })
//   ], {});
//   /**
//    * Add seed commands here.
//    *
//    * Example:
//    * await queryInterface.bulkInsert('People', [{
//    *   name: 'John Doe',
//    *   isBetaMember: false
//    * }], {});
//   */
// }
// export async function down(queryInterface, Sequelize) {
//   /**
//    * Add commands to revert seed here.
//    *
//    * Example:
//    * await queryInterface.bulkDelete('People', null, {});
//    */
// }

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const options = await getProduct_Options().then((x) => x);
    // console.log(products);
    // return;

    await queryInterface.bulkInsert('product_options', [

      options.map((data, index) => {
        return {
          sku: Number(data['sku']),
          optionCode: data['optionCode'],
          createAt: new Date(),
          updateAt: new Date(),
        }
      })
    ].flat(), {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('product_options', null, {});
  },
};