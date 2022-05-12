import { searchTripsActions } from '../actions/tripSearch';
import { ITripSearchState, ITripSearchAction } from 'types/store/trips';

const initialState: ITripSearchState = {
  sort: 'start_datetime',
  isShowNearby: true,
  isShowAll: false,
  from_airport_id: '',
  to_airport_id: '',
  start_date: '',
  // arrival_date: string
  passengers: '',
};

export function TripSearchReducer(state = initialState, action: ITripSearchAction) {
  const { type, payload } = action;
  switch (type) {
    case searchTripsActions.SET_TRIP_FILTERS:
      return {
        ...state,
        ...payload,
        isShowNearby: false,
        isShowAll: false,
        sort: 'start_datetime'
      };
    case searchTripsActions.SET_TRIP_SORT:
      return {
        ...state,
        sort: payload
      };
    case searchTripsActions.CLEAR_FILTERS:
      return {
        ...state,
        ...initialState
      };
    case searchTripsActions.SHOW_ALL_TRIPS:
      return {
        ...state,
        ...initialState,
        isShowAll: true
      };
    case searchTripsActions.HIDE_NEARBY_TRIPS:
      return {
        ...state,
        isShowNearby: false
      };
    default:
      return state;
  }
}
