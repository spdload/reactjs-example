import axios from 'axios';
import { getToken } from 'utils/token';

import config from '../config';

export const getCitiesService = (params?: string) => {
  const token = getToken('access_token');
  return axios.get(`${config.api_url}cities?q=${params}`,  {
    headers: {
        Authorization: 'Bearer ' + token
    }
  });
};
