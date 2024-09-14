import axios from 'axios'

const instance = axios.create({
    baseURL: `http://${process.env.URL_FRONTEND || '192.168.1.2'}:${process.env.PORT_FRONTEND || '3004'}`,
    timeout: 3 * 60 * 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,

});
axios.defaults.withCredentials = true

export default instance;