import axios from 'axios';

import { getToken } from 'utils/token';
import config from '../config';

const apiService = axios.create({
  baseURL: config.api_url,
});

apiService.interceptors.request.use( (apiConfig) => {
  const token = getToken('access_token');
  apiConfig.headers.Authorization =  token ? `Bearer ${token}` : '';
  return apiConfig;
});

export default apiService;
