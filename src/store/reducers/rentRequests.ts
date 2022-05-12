import {
  GET_MY_RENT_REQUESTS,
  GET_MY_RENT_REQUESTS_FAIL,
  GET_MY_RENT_REQUESTS_SUCCESS,
  INCREMENT_RENT_REQUESTS_PAGE
} from '../actions/rentRequests';
import { IRentRequestsAction } from 'types/store/rentRequests';

const initialState = {
  requests: [],
  currentPage: 1,
  totalPages: 1,
  isLoading: false,
  errors: null,
};

export function RentRequestsReducer(state = initialState, action: IRentRequestsAction) {
  switch (action.type) {
    case INCREMENT_RENT_REQUESTS_PAGE: {
      return {
        ...state,
        currentPage: state.currentPage + 1
      };
    }
    case GET_MY_RENT_REQUESTS: {
      return {
        ...state,
        isLoading: true,
        errors: null,
      };
    }
    case GET_MY_RENT_REQUESTS_SUCCESS: {
      const { requests, totalPages } = action.payload;
      return {
        ...state,
        requests: state.currentPage === 1 ? requests : [...state.requests, ...requests],
        totalPages,
        isLoading: false,
        errors: null,
      };
    }
    case GET_MY_RENT_REQUESTS_FAIL: {
      return {
        ...state,
        requests: [],
        isLoading: false,
        errors: action.payload.errors,
      };
    }
    default:
      return state;
  }
}
