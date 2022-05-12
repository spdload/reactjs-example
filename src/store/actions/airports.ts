import { GET_COUNTRIES_FAIL } from "./countries";

export const GET_AIRPORTS_REQUEST = 'GET_AIRPORTS_REQUEST';
export const GET_AIRPORTS_SUCCESS = 'GET_AIRPORTS_SUCCESS';
export const GET_AIRPORTS_FAIL = 'GET_AIRPORTS_FAIL';


export const getAirportsRequest = (cityId?: number) => {
    return {
        type:GET_AIRPORTS_REQUEST,
        payload:{
            cityId
        }
    };
};

export const getAirportsSuccess = (payload: any) => {
    return {
        type:GET_AIRPORTS_SUCCESS,
        payload
    };
};

export const getAirportsFail = (payload: Error) => {
    return {
        type:GET_COUNTRIES_FAIL,
        payload
    };
};