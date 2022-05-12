import { put, takeLatest } from 'redux-saga/effects';
import { getAirportsService } from 'services/airports';
import { getAirportsFail, getAirportsSuccess } from 'store/actions/airports';

function* getAirportsSaga(action : any) {
    const {payload} = action;
    try {
        const {data} = yield getAirportsService(payload.cityId);
        yield put(
            getAirportsSuccess(data.data)
        );
    } catch (error) {
        yield put(getAirportsFail(error.response.data.errors));
    }
}

export default function* airportsActionWatcher(){
    yield takeLatest('GET_AIRPORTS_REQUEST', getAirportsSaga)
}