import axios from "../axios";
const handleAuth = async () => {

    const res = await axios.get('/api/users/auth', {
        withCredentials: true,

    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}
const handleUpdateInfoUser = async (user) => {
    const res = await axios.put('/api/users/profile', {
        user: user
    }
    ).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const handleGetInfoUser = async (username) => {
    const res = await axios.get('/api/users/profile', {
        params: {
            username: username,            
        },
        withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}
const handleUpdateAddressUser = async (username, city, district, ward, detail) => {
    const res = await axios.put('/api/users/profile/address', {
        'username': username,
        'city': city,
        'district': district,
        'ward': ward,
        'detail': detail,
    }
    ).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const handleGetAddressUser = async (username) => {
    const res = await axios.get('/api/users/profile/address', {
        params: {
            username: username,
        },
        withCredentials: true
    }).then((r) => {
        return r;
    }
    ).catch((e) => { return e });
    return res;
}

const handleCreateUserRequest = async (email, username, password) => {
    const res = await axios.post('/api/users', { email, username, password }, { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { console.log(e) });
    return res;
}
const handleCreateUser = async (code) => {
    const res = await axios.post('/api/users/register', { verifyCode: code }, { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { return e });
    return res;
}
const handleLogin = async (username, password) => {
    return await axios.post('/api/users/login', {
        username: username,
        password: password
    }, { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { return e });
}

const handleLogout = async (username) => {
    return await axios.post('/api/users/logout', {
        username: username,
    }, { withCredentials: true }).then((r) => {
        return r;
    }).catch((e) => { return e });
}


export {
    handleCreateUserRequest,
    handleCreateUser,
    handleLogin,
    handleLogout,
    handleAuth,
    handleGetInfoUser,
    handleUpdateInfoUser,
    handleGetAddressUser,
    handleUpdateAddressUser,
};