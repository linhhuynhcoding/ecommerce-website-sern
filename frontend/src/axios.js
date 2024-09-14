import axios from 'axios'
require('dotenv').config({ path: '../backend/.env' })

const instance = axios.create({
    baseURL: `${process.env.URL_BACKEND}:{process.env.PORT_BACKEND}`,
    timeout: 3 * 60 * 1000,
    headers: {'X-Custom-Header': 'foobar'},
    withCredentials: true,

});
axios.defaults.withCredentials = true

export default instance;