import axios from "../axios";

const handleAddtoCart = async (username, sku, quantity) => {

    const res = await axios.post('/api/cart/add', {
        username: username,
        sku: sku,
        quantity: quantity
    }, {
        // withCredentials: true

    }

    ).then((r) => {
        return r;
    }
    );
    return res;
}
const handleRemovefromCart = async (username, sku) => {

    const res = await axios.post('/api/cart/remove', {
        username: username,
        sku: sku,
    }, {
        // withCredentials: true
    }).then((r) => {
        return r;
    }
    );
    return res;
}
const handleGetCart = async (username) => {
    const res = await axios.get('/api/cart/get', {
        params: {
            username: username,
        },
        // withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}
const handleUpdateCart = async (username, sku, quantity) => {
    const res = await axios.put('/api/cart/update', {
        username: username,
        sku: sku,
        quantity: quantity,
        // withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

export {
    handleAddtoCart,
    handleRemovefromCart,
    handleGetCart,
    handleUpdateCart,
};
