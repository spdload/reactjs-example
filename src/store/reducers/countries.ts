import { GET_COUNTRIES_REQUEST, GET_COUNTRIES_SUCCESS, GET_COUNTRIES_FAIL } from 'store/actions/countries';

export function CountriesReducer(state: any = {isLoading: false, data: null, errors: null}, action: any) {
    switch (action.type) {
        case GET_COUNTRIES_REQUEST: {
            return {
                isLoading: true,
                data: null,
                errors:  null
            };
        }
        case GET_COUNTRIES_SUCCESS: {
            return {
                isLoading: false,
                data: action.payload,
                errors:  null
            };
        }
        case GET_COUNTRIES_FAIL: {
            return {
                isLoading: false,
                data: null,
                errors:  action.payload
            };
        }
        default:
            return state;
    }
}
