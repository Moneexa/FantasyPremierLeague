import axios from "axios";
import { useStoreState } from 'easy-peasy';

const baseUrl = "http://localhost:8000/api";

axios.interceptors.request.use(
    (config) => {
        if (!config.url.includes('register')) {
            const accessToken = localStorage.getItem('accessToken');
            if (accessToken) {
                config.headers['Authorization'] = 'Bearer ' + accessToken;
            }
        }
        config.headers['Content-Type'] = 'application/json'
        return config;
    },
    error => {
        console.log('rejected');
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken && error.response.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios.post(`${baseUrl}/refresh`, {refreshToken: refreshToken})
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem("accessToken", res.data.access);
                        return axios(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        console.log('use');
        return response;
    },
    function (error) {
        console.log('rejected');
        const originalRequest = error.config;
        let refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken && error.response.status == 401 && !originalRequest._retry) {
            originalRequest._retry = true;
            return axios.post(`${baseUrl}/refresh/`, {refresh: refreshToken})
                .then((res) => {
                    if (res.status === 200) {
                        localStorage.setItem("accessToken", res.data.access);
                        return axios(originalRequest);
                    }
                });
        }
        return Promise.reject(error);
    }
);


const api = {
    authorize: (payload) => {
        let status = '';
        return axios.post(`${baseUrl}/users/authorize/`, payload)
            .then(res => {
                if (res.status == '200') {
                    status = 'success';
                    return {"status": status};
                }
            }).catch(error => {
                status = error.response.data.status;
                return {"status": status};
        });
    },
    getLeagues: (payload) => {
        return axios.get(`${baseUrl}/league/`, {params: {'period':payload}})
    },
    getMyLeagues: () => {
        return axios.get(`${baseUrl}/users/my_leagues/`)
    },
    getMayhem: (payload) => {
        return axios.get(`${baseUrl}/users/get_mayhem/`, {params: {'league_id': payload}})
    },
    getMyWinnings: () => {
        return axios.get(`${baseUrl}/users/get_gameweekhistory/`)
    },
    joinLeague: (payload) => {
        return axios.post(`${baseUrl}/team/join_league/${payload}/`)
            .then(res => {
                if (res.status == '201') {
                    return {"status": "ok"}
                }
            }).catch(error => {
                return {"status": "error", "message": error.response.data.error_message}
            });
    }
}

export default api;
