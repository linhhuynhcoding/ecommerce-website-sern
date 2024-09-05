const ExcelJS = require('exceljs');

const path = require('path');
const filePath = path.resolve(__dirname, "./../resources/db/raw.xlsx")

const columns = {
    'categories': [{ header: 'categoryID', key: 'categoryID' }, { header: 'categoryName', key: 'categoryName' }, { header: 'parentID', key: 'parentID' },],
    'products': [
        { header: 'sku', key: 'sku' },
        { header: 'productName', key: 'productName' },
        { header: 'productPrice', key: 'productPrice' },
        { header: 'categoryID', key: 'categoryID' },
        { header: 'des', key: 'des' },
        { header: 'shortDes', key: 'shortDes' },
        { header: 'warranty', key: 'warranty' },
    ],
    'product_images': [
        { header: 'sku', key: 'sku' },
        { header: 'imageID', key: 'imageID' },
        { header: 'imageURL', key: 'imageURL' },
    ],
    'brands': [
        { header: 'brandCode', key: 'brandCode' },
        { header: 'brandName', key: 'brandName' },
        { header: 'brandLogo', key: 'brandLogo' },
    ],
    'product_options': [
        { header: 'sku', key: 'sku' },
        { header: 'optionCode', key: 'optionCode' },
    ],
    'options': [
        { header: 'optionCode', key: 'optionCode' },
        { header: 'optionName', key: 'optionName' },
    ],
    'option_values': [
        { header: 'optionCode', key: 'optionCode' },
        { header: 'valueCode', key: 'valueCode' },
        { header: 'valueName', key: 'valueName' },
    ],
    'variant_values': [
        { header: 'sku', key: 'sku' },
        { header: 'variantCode', key: 'variantCode' },
        { header: 'optionCode', key: 'optionCode' },
        { header: 'valueCode', key: 'valueCode' },
    ],
    'product_attributes': [
        { header: 'sku', key: 'sku' },
        { header: 'attri_code', key: 'attri_code' },
        { header: 'attri_value', key: 'attri_value' },
    ],
    'attributes': [
        { header: 'attri_code', key: 'attri_code' },
        { header: 'attri_name', key: 'attri_name' },
    ],
}

const worksheetStructure = [
    'categories',
    'products',
    'product_images',
    'brands',
    'product_options',
    'option_values',
    'options',
    'variant_values',
    'product_attributes',
    'attributes',
];
// worksheet.columns = columns['products'];

// idCol.eachCell(function(cell, rowNumber) {
//     console.log(cell.value);
// });


async function getProducts() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('products');
    const products = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const product = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            product[header[i]] = r[i];
        }
        products.push(product);
        return;
    })

    return products;
}

module.exports = { getProducts };