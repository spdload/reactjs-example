import { put, takeLatest } from 'redux-saga/effects';

import jetApi from 'services/jets/jetApi';
import { GET_MY_RENT_REQUESTS, getRentRequestsFail, getRentRequestsSuccess } from '../actions/rentRequests';

import { RentRequestType } from 'types/store/rentRequests';

type ActionType = {
  type: string,
  payload: {
    type: RentRequestType;
    page: number;
  }
};

function* getRentRequest(action: ActionType) {
  const { payload: { type, page = 1 } } = action;
  
  try {
    const { data } = yield jetApi.getRentRequests(type, page);
    yield put(getRentRequestsSuccess(data.data, data.meta.last_page));
  } catch (error) {
    yield put(getRentRequestsFail(error.response.data.errors));
  }
}

export default function* rentRequestsActionWatcher() {
 yield takeLatest(GET_MY_RENT_REQUESTS, getRentRequest);
}
