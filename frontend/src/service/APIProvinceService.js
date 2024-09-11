import axios from './../axios'


export const getCity = async () => {
    return await axios.get('/api/province', {},
        { withCredentials: true }
    ).then((r) => {
        return r;
    }).catch((e) => { return e });
}
export const getDistrict = async (id) => {
    return await axios.get(`/api/province/district`,
        {
            params: {
                provinceId: id
            }
        },
        { withCredentials: true }).then((r) => {
            return r;
        }).catch((e) => { return e });
}
export const getWard = async (id) => {
    return await axios.get(`/api/province/ward`,
        { params: { districtId: id } },
        { withCredentials: true }).then((r) => {
            return r;
        }).catch((e) => { return e });
}