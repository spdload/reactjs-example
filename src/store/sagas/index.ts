import { all } from 'redux-saga/effects';
import authActionWatcher from './auth';
import userActionWatcher from './user';
import countriesActionWatcher from './countries';
import jetsActionWatcher from './jets';
import rentRequestsActionWatcher from './rentRequests';
import citiesActionWatcher from './cities';
import bookingTripActionWatcher from './bookingTrip';
import airportsActionWatcher from './airports';
import pilotActionWatcher from 'store/sagas/pilotInfo';

export default function* rootSaga() {
  yield all([
    authActionWatcher(),
    userActionWatcher(),
    countriesActionWatcher(),
    jetsActionWatcher(),
    rentRequestsActionWatcher(),
    citiesActionWatcher(),
    bookingTripActionWatcher(),
    pilotActionWatcher(),
    airportsActionWatcher()
  ]);
}
