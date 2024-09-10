import axios from "../axios";

const handleAuth = async () => {

    const res = await axios.get('/',{ withCredentials: true }).then((r) => {
        return r;
    }
    ).catch((e) => {return e});
    return res;
}

export { handleAuth };