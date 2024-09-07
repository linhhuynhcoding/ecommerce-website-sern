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
async function getImages() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('product_images');
    const images = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const image = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            image[header[i]] = r[i];
        }
        images.push(image);
        return;
    })

    // console.log(images);
    return images;
}
async function getCategories() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('categories');
    const categories = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const category = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            category[header[i]] = r[i];
        }
        categories.push(category);
        return;
    })

    return categories;
}
async function getBrands() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('brands');
    const brands = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const brand = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            brand[header[i]] = r[i];
        }
        brands.push(brand);
        return;
    })

    return brands;
}
async function getOptions() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('options');
    const options = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const option = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            option[header[i]] = r[i];
        }
        options.push(option);
        return;
    })

    return options;
}
async function getOption_Values() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('option_values');
    const optionValues = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const values = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            values[header[i]] = r[i];
        }
        optionValues.push(values);
        return;
    })

    return optionValues;
}
async function getVariant_Values() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('variant_values');
    const variantValues = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const values = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            values[header[i]] = r[i];
        }
        variantValues.push(values);
        return;
    })

    return variantValues;
}
async function getProduct_Options() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('product_options');
    const productOptions = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const values = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            values[header[i]] = r[i];
        }
        productOptions.push(values);
        return;
    })

    return productOptions;
}
async function getAttributes() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('attributes');
    const attributes = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const values = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            values[header[i]] = r[i];
        }
        attributes.push(values);
        return;
    })

    return attributes;
}
async function getAttribute_Products() {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('product_attributes');
    const attributes = [];
    
    worksheet.eachRow((row, rowNumber) => {
        const values = {};
        if (rowNumber === 1) return;
        const r = row.values;
        r.shift();
        for (let i = 0; i < worksheet.columnCount; i++) {
            const header = worksheet.getRow(1).values;
            header.shift();
            // console.log(header);
            values[header[i]] = r[i];
        }
        attributes.push(values);
        return;
    })

    return attributes;
}
module.exports = { getProducts, getImages, getCategories, getBrands, getOptions, getOption_Values, getVariant_Values, getProduct_Options, getAttributes, getAttribute_Products };