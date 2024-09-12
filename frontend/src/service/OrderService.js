import axios from "../axios";

const handleGetAllOrders = async (filters) => {
    const res = await axios.get('/api/orders', { 
        params: {
            filters: filters
        },
        withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const handleCreateOrder = async (
    userID, shipfee, amount, notes, products
) => {
    return await axios.post('/api/orders', {
        userID: userID, 
        shipfee: shipfee, 
        amount: amount, 
        notes: notes, 
        products: products
    }, { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { return e });
}

const handleGetUserOrders = async (username, filters) => {
    const res = await axios.get('/api/orders/mine', { 
        params: {
            username: username,
            filters: filters,
        },
        withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
} 

const handleFindOrderByID = async (orderId) => {
    const res = await axios.get(`/api/orders/${orderId}`, { 
        withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
} 

const markOrderAsPaid = async (orderId) => {
    const res = await axios.put(`/api/orders/${orderId}/pay`, {
        orderId: orderId
    }
    ).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const markOrderAsDelivered = async (orderId) => {
    const res = await axios.put(`/api/orders/${orderId}/ship`, {
        orderId: orderId
    }
    ).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

export {
    handleGetAllOrders,
    handleCreateOrder,
    handleGetUserOrders,
    handleFindOrderByID,
    markOrderAsPaid,
    markOrderAsDelivered,
};