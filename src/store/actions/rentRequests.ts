import { ErrorsType } from 'types/static';
import { IRentRequest, RentRequestType } from 'types/store/rentRequests';

// action-types
export const GET_MY_RENT_REQUESTS = 'GET_MY_RENT_REQUESTS';
export const GET_MY_RENT_REQUESTS_SUCCESS = 'GET_MY_RENT_REQUESTS_SUCCESS';
export const GET_MY_RENT_REQUESTS_FAIL = 'GET_MY_RENT_REQUESTS_FAIL';
export const INCREMENT_RENT_REQUESTS_PAGE = 'INCREMENT_RENT_REQUESTS_PAGE';


export function incrementPage() {
  return {
    type: INCREMENT_RENT_REQUESTS_PAGE,
  };
}

export function fetchMyRequests(filter: RentRequestType, page: number = 1) {
  return {
    type: GET_MY_RENT_REQUESTS,
    payload: {
      type: filter,
      page
    }
  };
}

export function getRentRequestsSuccess(requests: IRentRequest, totalPages: number) {
  return {
    type: GET_MY_RENT_REQUESTS_SUCCESS,
    payload: {
      requests,
      totalPages,
    },
  };
}

export function getRentRequestsFail(errors: ErrorsType) {
  return {
    type: GET_MY_RENT_REQUESTS_FAIL,
    payload: {
      errors,
    },
  };
}
