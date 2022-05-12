import { put, takeLatest } from 'redux-saga/effects';
import { getCountriesService } from 'services/countries';
import { getCountriesSuccess, getCountriesFail } from 'store/actions/countries';

function* countriesSaga() {
  try {
    const { data } = yield getCountriesService();
    yield put(
      getCountriesSuccess(data.data)
    );
  } catch (error) {
    yield put(getCountriesFail(error.response.data.errors));
  }

}

export default function* countriesActionWatcher() {
  yield takeLatest('GET_COUNTRIES_REQUEST', countriesSaga);
}

