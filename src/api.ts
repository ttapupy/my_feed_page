import axios from 'axios';


export const telexApi = axios.create();

telexApi.interceptors.request.use(async (config: any) => {
  config.baseURL = 'https://telex.hu/'
  config.responseType = 'text'
  return config;
}, (error: any) => Promise.reject(error));

telexApi.interceptors.response.use(
  response => response,
  (error) => {
    return Promise.reject(error);
  },
);