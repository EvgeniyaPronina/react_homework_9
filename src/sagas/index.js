import { all, fork } from 'redux-saga/effects'
import authSaga from './authSaga'
import loginSaga from './loginSaga'
import { currencyWatch, fetchBtcWatch, fetchEthWatch } from './currencySaga'


export default function* rootSaga () {
    yield all([
        fork(authSaga),
        fork(loginSaga),
        fork(currencyWatch),
        fork(fetchBtcWatch),
        fork(fetchEthWatch)
    ])
}

