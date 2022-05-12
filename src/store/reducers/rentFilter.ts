import { SET_RENT_FILTERS, setRentActionType } from '../actions/rentFilters';
import { RentFiltersType } from 'types/store/rentFilters';

const initialState = {
  filters: {
    airport_id: '',
    start_date: '',
    start_time: '',
    end_date: '',
    end_time: '',
    cost_from: '',
    cost_to: '',
    types: {},
  }
};

export function JetRentFiltersReducer(state: RentFiltersType = initialState, action: setRentActionType) {
  switch (action.type) {
    case SET_RENT_FILTERS:
      return {
        filters: action.payload.filters
      };
    default:
      return state;
  }
}
