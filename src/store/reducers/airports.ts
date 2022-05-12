import {
  GET_AIRPORTS_FAIL,
  GET_AIRPORTS_REQUEST,
  GET_AIRPORTS_SUCCESS,
} from "store/actions/airports";

const initialState = {
  isLoading: false,
  errors: null,
  airports: null,
};
export const AirportsReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case GET_AIRPORTS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_AIRPORTS_SUCCESS:
      return {
        airports: action.payload,
        isLoading: false,
        errors: null,
      };
    case GET_AIRPORTS_FAIL:
      return {
        airports: null,
        isLoading: false,
        errors: action.payload,
      };
      default:
          return state;
  }
};
