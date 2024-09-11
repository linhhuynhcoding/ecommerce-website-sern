import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.2:3004/',
    timeout: 3 * 60 * 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,

});
axios.defaults.withCredentials = true

export default instance;