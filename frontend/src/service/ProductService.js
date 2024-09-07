import axios from "../axios";

const handleGetProducts = async (id, categoryId, limit) => {

    const res = await axios.get('/api/get-product', {
        params: {
            id: id,
            category: categoryId,
            limit: limit,
        }

    }).then((r) => {
        return r;
    }
    );
    return res;
}

export { handleGetProducts };
