'use strict';
const { getProducts } = require('./../utils/ExcelUtil.js');
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
    const products = await getProducts().then((x) => x);
    // console.log(products);
    // return;

    await queryInterface.bulkInsert('products', [

      products.map((data, index) => {
        return {
          sku: Number(data['sku']),
          productName: data['productName'],
          productPrice: Number(data['productPrice']),
          categoryID: data['categoryID'],
          des: data['des'],
          shortDes: data['shortDes'],
          warranty: Number(data['warranty']),
          quantity: Math.floor(Math.random() * 15),
          createAt: new Date(),
          updateAt: new Date(),
        }
      })
    ], {});
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};