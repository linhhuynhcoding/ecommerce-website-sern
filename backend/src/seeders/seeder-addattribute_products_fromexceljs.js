'use strict';
const { getAttribute_Products } = require('../utils/ExcelUtil.js');
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
    const brands = await getAttribute_Products().then((x) => x);
    // console.log(products);
    // return;

    await queryInterface.bulkInsert('attribute_products', [

      brands.map((data, index) => {
        return {
          sku: data['sku'],
          attri_code: data['attri_code'],
          attri_value: data['attri_value'],
          createAt: new Date(),
          updateAt: new Date(),
        }
      })
    ].flat(), {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('attribute_products', null, {});
  },
};