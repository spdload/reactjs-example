import { put, takeLatest } from 'redux-saga/effects';
import { getCitiesService } from 'services/cities';
import { citiesActions, getCityListSuccess, getCityListFailure } from 'store/actions/cities';
import { ITripSearchAction } from 'types/store/trips';

function* getCitiesSaga(action: ITripSearchAction) {
  const { payload } = action;
  try {
    const { data } = yield getCitiesService(payload.params);
    yield put(getCityListSuccess({type: payload.type, cities: data.data}));
  } catch (error) {
    yield put(getCityListFailure(error.response.data.errors));
  }
}

export default function* citiesActionWatcher() {
  yield takeLatest(citiesActions.GET_CITY_LIST_REQUEST, getCitiesSaga);
}

