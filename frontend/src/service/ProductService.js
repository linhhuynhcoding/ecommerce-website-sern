import axios from "../axios";

const handleGetProducts = async (id, categoryId, pageSize, page) => {

    const res = await axios.get('/api/products', {
        params: {
            id: id,
            category: categoryId,
            pageSize: pageSize,
            page: page,
        }

    }).then((r) => {
        return r;
    }
    );
    return res;
}

export { handleGetProducts };
