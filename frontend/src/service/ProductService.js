import axios from "../axios";

const handleGetProducts = async (id, categoryId, pageSize, page) => {

    const res = await axios.get('/api/products', {
        params: {
            id: id,
            category: categoryId,
            pageSize: pageSize,
            page: page,
        },

        // withCredentials: true

    }).then((r) => {
        return r;
    }
    );
    return res;
}

const handleFindProductBySKU = async (sku) => {
    const res = await axios.get(`/api/products/get/${sku}`, {
        params: {
            sku: sku,
        },
        withCredentials: true
    }).then((r) => {
        return r;
    }
    );
    return res;
}

const handleUpdateProduct = async (
    sku,
    productName,
    productPrice,
    categoryID,
    warranty,
    quantity,
    brandCode
) => {
    const res = await axios.put(`/api/products/update/${sku}`, {
        product: {

            'productName': productName,
            'productPrice': productPrice,
            'categoryID': categoryID,
            'warranty': warranty,
            'quantity': quantity,
            'brandCode': brandCode,
        }
    }
    ).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const handleCreateProduct = async (
    sku, productName, productPrice,
    categoryID, warranty,
    quantity, brandCode, images
) => {
    const res = await axios.post('/api/products/create', 
        { 
            sku, productName, productPrice, 
            categoryID, warranty, 
            quantity, brandCode, images
         }, 
        { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { return e });
    return res;
}

export {
    handleGetProducts,
    handleUpdateProduct,
    handleCreateProduct
};
