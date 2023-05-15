/* Библиотеки */
import axios from "axios";

/* Константы */
import Api from "src/constants/api";
import Access from "src/constants/access";

const MainApi = axios.create({
    withCredentials: true,
    baseURL: Api.mainServer
});

MainApi.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${Access.token}`;

    return config;
});

export default MainApi;