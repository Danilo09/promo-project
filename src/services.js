import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "http://localhost/projeto_novi/wp-json/api"
});

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
    return axios.post(`http://localhost/projeto_novi/wp-json/jwt-auth/v1/token/validate`)
  }
};
