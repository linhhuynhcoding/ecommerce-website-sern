import axios from "../axios";

const handleCreateUserRequest = async (email, username, password) => {
    const res = await axios.post('/api/users', {email, username, password} , { withCredentials: true }).then((r) => {
        return r;   
    }).catch((e) => {console.log(e)});
    return res;
}
const handleCreateUser = async (code) => {
    const res = await axios.post('/api/users/register', {verifyCode: code} , { withCredentials: true }).then((r) => {
        return r;   
    }).catch((e) => {return e});
    return res;
}
const handleLogin = async (username, password) => {
    return await axios.post('/api/users/login', {
        username: username,
        password: password
    } , { withCredentials: true }).then((r) => {
        return r;   
    }).catch((e) => {return e});
}

export { handleCreateUserRequest, handleCreateUser, handleLogin };