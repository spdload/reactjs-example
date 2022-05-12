import { ITripSearchAction, ICitiesState } from 'types/store/trips';
import { citiesActions } from 'store/actions/cities';

const initialState: ICitiesState = {
  cities_departure: [],
  cities_arrival: [],
};

export function CitiesReducer(state = initialState, action: ITripSearchAction) {
  const { type, payload } = action;
  switch (type) {
    case citiesActions.GET_CITY_LIST_SUCCESS:
      const newCitiesList = {
        [payload.type]: payload.cities
      };
      return {
        ...state,
        ...newCitiesList
      };
    case citiesActions.GET_CITY_LIST_FAILURE:
      return {
        ...state,
        errors: payload
      };
    case citiesActions.CLEAR_CITIES:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
}
