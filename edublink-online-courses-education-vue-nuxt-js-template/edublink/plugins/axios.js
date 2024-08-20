import axios from "axios";

const axiosapi = axios.create({                                   
    baseURL: process.env.VITE_API_URL,

});

export default axiosapi;