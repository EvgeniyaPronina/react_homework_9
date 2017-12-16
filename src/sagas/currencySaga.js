import {takeLatest, fork, take, select, put, cancel, call} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {loginSuccess, logout} from '../actions/loginActions';
import {getOffset} from '../reducers/currencyReducer';
import {
    selectBtc,
    selectEth,
    fetchBtcRequest,
    fetchEthRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthFailure,
    fetchEthSuccess,
    selectOffset,
} from '../actions/currencyActions';
import {candles} from '../helpers/api';

function* fetchCurrencyFlow() {
    while (true) {
        const offset = yield select(getOffset);
        yield put(fetchBtcRequest(offset));
        yield put(fetchEthRequest(offset));

        yield delay(15000);
    }
}

export function* currencyWatch() {
    let currencyTask;
    while (true) {
        const action = yield take([loginSuccess, logout, selectBtc, selectEth, selectOffset]);

        if (currencyTask) {
            yield cancel(currencyTask);
            currencyTask = undefined;
        }
        if (action.type !== logout.toString()) currencyTask = yield fork(fetchCurrencyFlow);
    }
}

function* fetchBtcFlow(action) {
    try {
        console.log(action.payload)
        const response = yield call(candles, 'btc', action.payload);
        console.log(response)
        yield put(fetchBtcSuccess(response.data.result));
    } catch (error) {
        yield put(fetchBtcFailure(error));
    }
}

function* fetchEthFlow(action) {
    try {
        const response = yield call(candles, 'eth', action.payload);
        console.log(response.data.result)
        yield put(fetchEthSuccess(response.data.result));
    } catch (error) {
        yield put(fetchEthFailure(error));
    }
}

export function* fetchBtcWatch() {
    yield takeLatest(fetchBtcRequest, fetchBtcFlow);
}

export function* fetchEthWatch() {
    yield takeLatest(fetchEthRequest, fetchEthFlow);
}
