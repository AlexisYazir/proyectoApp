import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://api-web-5.vercel.app/api',
    withCredentials: true
})

export default instance