import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.1.2:3004/',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
});

export default instance;