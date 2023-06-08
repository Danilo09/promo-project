import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost/projeto_novi/wp-json/api"
});

axiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if(token){
      config.headers.Authorization = token
    }
    return config;
  },
  function (error){
    return Promise.reject(error)
  }
);

export const api = {
  get(endpoint) {
    return axiosInstance.get(endpoint);
  },
  post(endpoint, body) {
    return axiosInstance.post(endpoint, body);
  },
  login(body){
    return axios.post(`http://localhost/projeto_novi/wp-json/jwt-auth/v1/token`, body)
  },
  validateToken(){
    return axiosInstance.post(`http://localhost/projeto_novi/wp-json/jwt-auth/v1/token/validate`)
  }
};
