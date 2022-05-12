export const GET_COUNTRIES_REQUEST = 'GET_COUNTRIES_REQUEST';
export const GET_COUNTRIES_SUCCESS = 'GET_COUNTRIES_SUCCESS';
export const GET_COUNTRIES_FAIL = 'GET_COUNTRIES_FAIL';


// logout user
export function getCountriesRequest() {
    return {
        type: GET_COUNTRIES_REQUEST
    };
}

export function getCountriesSuccess(payload: any) {
    return {
        type: GET_COUNTRIES_SUCCESS,
        payload
    };
}
export function getCountriesFail(payload: Error) {
    return {
        type: GET_COUNTRIES_FAIL,
        payload,
    };
}
