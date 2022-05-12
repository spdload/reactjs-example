import { TGetCitiesPayload } from 'types/store/trips';

export const citiesActions = {
  GET_CITY_LIST_REQUEST: 'GET_CITY_LIST_REQUEST',
  GET_CITY_LIST_SUCCESS: 'GET_CITY_LIST_SUCCESS',
  GET_CITY_LIST_FAILURE: 'GET_CITY_LIST_FAILURE',

  CLEAR_CITIES: 'CLEAR_CITIES'
};

export function getCityListRequest(payload: TGetCitiesPayload) {
  return {
    type: citiesActions.GET_CITY_LIST_REQUEST,
    payload
  };
}

export function getCityListSuccess(payload: TGetCitiesPayload) {
  return {
    type: citiesActions.GET_CITY_LIST_SUCCESS,
    payload
  };
}

export function getCityListFailure(payload: Error) {
  return {
    type: citiesActions.GET_CITY_LIST_FAILURE,
    payload
  };
}

export function clearCities() {
  return {
    type: citiesActions.CLEAR_CITIES
  };
}