'use strict';
const { getCategories } = require('../utils/ExcelUtil.js');
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
    const categories = await getCategories().then((x) => x);
    // console.log(categories);
    // return;

    await queryInterface.bulkInsert('categories', [

      categories.map((data, index) => {
        return {
          categoryID: data['categoryID'],
          categoryName: data['categoryName'],
          parentID: data['parentID'],
          createAt: new Date(),
          updateAt: new Date(),
        }
      })
    ].flat(), {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  },
};