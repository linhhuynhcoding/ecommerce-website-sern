import axios from "../axios";

const handleCreateCookies = async (id, categoryId, pageSize, page) => {

    const res = await axios.get('/',{ withCredentials: true }).then((r) => {
        return r;
    }
    );
    return res;
}

export { handleCreateCookies };