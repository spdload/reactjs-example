import axios from 'axios';
import { getToken } from 'utils/token';

import config from '../config';

export const getAirportsService = (cityId?: number|string) => {
    const irl = cityId ? `${config.api_url}airports?filter[city]=${cityId}` : `${config.api_url}airports`;
    const token = getToken('access_token');
    return axios.get(irl, {
      headers: {
          Authorization: 'Bearer ' + token
      },
    });
  };